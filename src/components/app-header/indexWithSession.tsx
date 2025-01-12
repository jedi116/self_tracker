import * as React from 'react';
import AppHeader from  './index'
import { auth } from "@/auth"
import {prisma} from "@/prisma";

export async function AppHeaderWithSession () {
    const session = await auth()
    return(
        <AppHeader session={session} />
    )
}