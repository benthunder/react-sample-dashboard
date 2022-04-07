import React from 'react';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Reavenue</span>
                <div className="featuredContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Reavenue</span>
                <div className="featuredContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        +11.4 <ArrowUpward />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Reavenue</span>
                <div className="featuredContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
        </div>
    )
}

export default FeaturedInfo;