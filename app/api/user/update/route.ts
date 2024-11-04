import prisma from '@/prisma/client'
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { bio } = body;

        console.log('Received update request:', {
            email: session.user.email,
            bio: bio
        });

        if (!bio || typeof bio !== 'string') {
            return NextResponse.json(
                { error: 'Bio is required and must be a string' },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        if (!existingUser) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const updatedUser = await prisma.user.update({
            where: {
                email: session.user.email,
            },
            data: {
                bio,
            },
            select: {
                id: true,
                email: true,
                bio: true,
            },
        });

        return NextResponse.json({ success: true, user: updatedUser });

    } catch (error) {
        console.error('Error updating user:', {
            error,
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });

        return NextResponse.json(
            { 
                error: 'Failed to update user',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}