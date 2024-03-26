import React, {useState} from 'react';

import First from "../First";
import Second from "../Second";
import RecentlyAdded from "../RecentlyAdded";
import TopCategories from "../TopCategories";
import Feedback from "../Feedback";
import Newsletter from "../Newsletter";

export default function Main(props) {

    const [data] = useState([
        {year: 1322, "bids so far": 29, origin: "China"}
    ])
    const [recentlyAdded] = useState([
        {
            dataImage: require('../../static/images/clipart.png'),
            dataName: "Data 1",
            productYear: 1192,
            type: "Weapons",
            bid: "$ 895.50",
            bidSoFar: 12,
            bidClosesIn: 12,
            imgW: "84px",
            imgH: "130px"
        },
        {
            dataImage: require('../../static/images/daco.png'),
            dataName: "Data 2",
            productYear: 1078,
            type: "Weapons",
            bid: "$ 759",
            bidSoFar: 14,
            bidClosesIn: 12,
            imgW: "84px",
            imgH: "130px"
        }, {
            dataImage: require('../../static/images/skull.png'),
            dataName: "Data 3",
            productYear: 1256,
            type: "Weapons",
            bid: "$ 895.50",
            bidSoFar: 16,
            bidClosesIn: 12,
            imgW: "102px",
            imgH: "130px"
        }, {
            dataImage: require('../../static/images/blue-vase.png'),
            dataName: "Data 4",
            productYear: 1322,
            type: "Vase",
            bid: "$ 356.50",
            bidSoFar: 29,
            bidClosesIn: 15,
            imgW: "102px",
            imgH: "130px"
        },

    ])
    const [topCategories] = useState([
        {
            sellAmount1: 122,
            type1: "Weapons",
            place1: "Worefall",
            imgSrc1: require('../../static/images/skull-2.png'),
            sellAmount2: 71,
            type2: "Skulls",
            place2: "Worefall",
            imgSrc2: require('../../static/images/skull-2.png'),
            sellAmount3: 35,
            type3: "Statues",
            place3: "Worefall",
            imgSrc3: require('../../static/images/toppng.png'),
            sellAmount4: 413,
            type4: "Keep",
            place4: "Worefall",
            imgSrc4: require('../../static/images/furniture.png'),
            sellAmount5: 122,
            type5: "Watched",
            place5: "Worefall",
            imgSrc5: require('../../static/images/clippart-2.png'),
            sellAmount6: 122,
            type6: "Furniture",
            place6: "Worefall",
            imgSrc6: require('../../static/images/clippart-2.png')
        },
        {
            sellAmount1: 75,
            type1: "Furniture",
            place1: "Worefall",
            imgSrc1: require('../../static/images/furniture.png'),
            sellAmount2: 13,
            type2: "Watched",
            place2: "Worefall",
            imgSrc2: require('../../static/images/clippart-2.png'),
            sellAmount3: 42,
            type3: "Gramophone",
            place3: "Worefall",
            imgSrc3: require('../../static/images/gramophone.png'),
            sellAmount4: 53,
            type4: "Skull",
            place4: "Worefall",
            imgSrc4: require('../../static/images/skull-2.png'),
            sellAmount5: 29,
            type5: "Watched",
            place5: "Worefall",
            imgSrc5: require('../../static/images/clippart-2.png'),
            sellAmount6: 86,
            type6: "Furniture",
            place6: "Worefall",
            imgSrc6: require('../../static/images/clippart-2.png')
        }

    ])
    return (
        <main>
            <First data={data}/>
            <Second/>
            <RecentlyAdded items={recentlyAdded}/>
            <TopCategories items={topCategories}/>
            <Feedback/>
            <Newsletter/>
        </main>
    );
}
