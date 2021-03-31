import React from 'react';
import { withRouter } from 'react-router-dom'
import {
    useSelector
} from 'react-redux';

import Table from '../components/Table';

function Home({history}) {
    const tableTitle = useSelector(state => {
        return state.siteData?.data?.metadata?.title;
    });

    const tableData = useSelector(state => {
        console.log(state)
        const features = state.siteData?.data?.features;
        if (!features) return [];
        return features.map(({id, properties:row}) => {
            
            return [
                {
                    action: (e) => {
                        e.preventDefault();
                        console.log(id)
                        history.push(`/detail/${id}`);
                    },
                    text: row?.place,
                },
                row?.mag,
                row?.time,
            ]
        });
    })
    return <div>
        <Table title={tableTitle} columns={['Title', 'Magnitude', {
            name: 'Time',
            type: 'timestamp',
        }]} data={tableData} />
    </div>
}

export default withRouter(({history}) => Home({history}));