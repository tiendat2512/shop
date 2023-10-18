import React from 'react'
import StickyNav from '../../../GlobalComponents/StickyNav'
import { Box } from '@mui/material'

export default function CatalogHeader() {
    return (
        <>
            <div className="container">
                <Box>
                    <StickyNav />
                </Box>
            </div>
        </>
    )
}
