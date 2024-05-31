import React from 'react';
import LeftSidebar from './LeftSidebar';
import Navbar from './Navbar';
import Card from './Card';

function DashWind() {
    const data = [
        {
            id: 1,
            name: 'Slack',
            desc: 'Slack is an instant messaging program designed by Slack Technologies and owned by Salesforce.'
        },
        {
            id: 2,
            name: 'Facebook',
            desc: 'Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook.'
        },
        {
            id: 3,
            name: 'LinkedIn',
            desc: 'Linkedin is a business and employment- focused social media platform that works through websites and mobile apps.'
        },
        {
            id: 4,
            name: 'Google Ads',
            desc: 'Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service offerings'
        },
        {
            id: 5,
            name: 'Gmail',
            desc: 'Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide.'
        },
        {
            id: 6,
            name: 'Salesforce',
            desc: 'It provides customer relationship management software and applications focused on sales, customer service, marketing automation.'
        },
        {
            id: 7,
            name: 'Hubspot',
            desc: 'American developer and marketer of software products for inbound marketing, sales, and customer service.'
        },
    ];

    return (
        <div className='flex'>
            <LeftSidebar></LeftSidebar>
            <div className='w-[1236px] bg-white'>
                <Navbar />
                <div className='flex flex-wrap gap-10 mt-6 mx-10'>
                    {data.map((el, index) => (
                        <Card data={el} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DashWind;
