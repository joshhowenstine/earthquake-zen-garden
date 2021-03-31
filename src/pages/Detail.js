import React from 'react';
import {
    useSelector
} from 'react-redux';
import {timeStampToString} from '../utilities'
import {useParams} from 'react-router-dom';

export default function Home(props) {
    let { id } = useParams();
    const detail = useSelector(state => {
        return state.siteData?.data?.features.find(feature => feature.id === id);
    });
    return (
        <div className="detail-page">
            <h2>{detail?.properties?.place}</h2>
            <div className="detail-page__content">
                <div className="detail-page__content-title">Title</div>
                <div>{detail?.properties?.place}</div>

                <div className="detail-page__content-title">Magnitude</div>
                <div>{detail?.properties?.mag}</div>

                <div className="detail-page__content-title">Time</div>
                <div>{timeStampToString(detail?.properties?.time)}</div>

                <div className="detail-page__content-title">Status</div>
                <div>{detail?.properties?.status}</div>

                <div className="detail-page__content-title">Tsunami</div>
                <div>{detail?.properties?.tsunami}</div>

                <div className="detail-page__content-title">Type</div>
                <div>{detail?.properties?.type}</div>
            </div>
        </div>
    );
}