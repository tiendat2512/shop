import React from 'react'
import StickyNav from '../../../GlobalComponents/StickyNav'
import ImageGallery from "react-image-gallery";
import { Box } from '@mui/material';
import RegisterForm from '../../../GlobalComponents/RegisterForm';


const images = [
    {
        original: "https://file.hstatic.net/1000306633/article/blog2_a408af0a74e345288398890b15519188_1024x1024.jpg",
    },
    {
        original: "data:image/png;base64,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",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
    },
];
export default function Header() {
    return (
        <>
            <div className="container">
                <Box>
                    <StickyNav />
                  
                </Box>
                <Box sx={{ zIndex: '4' }}>
                    <ImageGallery style={{ width: '100vw' }} showThumbnails={false} showBullets={true} showFullscreenButton={false} showPlayButton={false} items={images} />
                </Box>
                <Box>
                  
                  <RegisterForm/>

                </Box>
            </div>

        </>
    )
}
