import React from 'react';
import "../../../sass/utils/_all.scss";
import '../../../sass/_description.scss';
import TextAndPhoto from '../section2/TextAndPhoto';
import TextAndPhotoSecond from '../section2/TextAndPhotoSecond';
import TextAndPhotoThird from '../section2/TextAndPhotoThird';
import TextAndPhotoForth from '../section2/TextAndPhotoForth';
import TextAndPhotoFifth from '../section2/TextAndPhotoFifth';

export default function Description() {
    return (
        <div className="product-container col-lg-12">
            <div className="space col-lg-2"></div>
            <div className='content-desc col-lg-8'>
                <TextAndPhoto />
                <TextAndPhotoSecond />
                <TextAndPhotoThird />
                <TextAndPhotoForth />
                <TextAndPhotoFifth />
            </div>
            <div className="space col-lg-2"></div>
        </div>
    )
}
