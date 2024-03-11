import React from 'react'
import Banner from './Banner'

const BannerExample = () => {
    return (
        <div className="container">
            <h2 className="marker">Banners</h2>
            <div className="marker banner-columns">
                <div style={{ width: "50%"}}><h3>Multi line</h3></div>
                <div style={{ width: "50%"}}><h3>Single line</h3></div>
            </div>

            <div className="banners">
                <div className="banner-container">
                    <Banner 
                        type="success" 
                        title="Congratulations!" 
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                    />
                </div>
                <div className="banner-container">
                    <Banner type="success" title="Congratulations!" />
                </div>
            </div>



            <div className="banners">
                <div className="banner-container">
                    <Banner 
                        type="warning" 
                        title="Attention" 
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                    />
                </div>
                <div className="banner-container">
                    <Banner type="warning" title="Attention" />
                </div>
            </div>

            <div className="banners">
                <div className="banner-container">
                    <Banner 
                        type="error" 
                        title="There is a problem with your application" 
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                    />
                </div>
                <div className="banner-container">
                    <Banner type="error" title="There is a problem with your application" />
                </div>
            </div>

            <div className="banners">
                <div className="banner-container">
                    <Banner 
                        type="neutral" 
                        title="Update available" 
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                    />
                </div>
                <div className="banner-container">
                    <Banner type="neutral" title="Update available" />
                </div>
            </div>
        </div>
    )
}

export default BannerExample