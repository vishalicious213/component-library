import React from 'react'
import Button from './components/Button'
import Banner from './components/Banner'

const App = () => {
    return (
        <div id="app">
            <div className="container">
                <h2 className="marker">Badges</h2>
                <Button textColor="#1F2937" backgroundColor="#F3F4F6" />
                <Button textColor="#991B1B" backgroundColor="#FEE2E2" />
                <Button textColor="#92400E" backgroundColor="#FEF3C7" />
                <Button textColor="#065F46" backgroundColor="#D1FAE5" />
                <Button textColor="#1E40AF" backgroundColor="#DBEAFE" />
                <Button textColor="#3730A3" backgroundColor="#E0E7FF" />
                <Button textColor="#5B21B6" backgroundColor="#EDE9FE" />
                <Button textColor="#9D174D" backgroundColor="#FCE7F3" />
            </div>

            <div className="container">
                <Button textColor="#1F2937" backgroundColor="#F3F4F6" pill />
                <Button textColor="#991B1B" backgroundColor="#FEE2E2" pill />
                <Button textColor="#92400E" backgroundColor="#FEF3C7" pill />
                <Button textColor="#065F46" backgroundColor="#D1FAE5" pill />
                <Button textColor="#1E40AF" backgroundColor="#DBEAFE" pill />
                <Button textColor="#3730A3" backgroundColor="#E0E7FF" pill />
                <Button textColor="#5B21B6" backgroundColor="#EDE9FE" pill />
                <Button textColor="#9D174D" backgroundColor="#FCE7F3" pill />
            </div>

            <div className="container">
                <h2 className="marker">Banners</h2>
                <div className="marker" style={{ display: "flex", gap: "1rem"}}>
                    <div style={{ width: "50%"}}><h3>Multi line</h3></div>
                    <div style={{ width: "50%"}}><h3>Single line</h3></div>
                </div>

                <div style={{ display: "flex", gap: "1rem"}}>
                    <div style={{ width: "50%"}}>
                        <Banner type="success" desc />
                    </div>
                    <div style={{ width: "50%"}}>
                        <Banner type="success" />
                    </div>
                </div>

                <div style={{ display: "flex", gap: "1rem"}}>
                    <div style={{ width: "50%"}}>
                        <Banner type="warning" desc />
                    </div>
                    <div style={{ width: "50%"}}>
                        <Banner type="warning" />
                    </div>
                </div>

                <div style={{ display: "flex", gap: "1rem"}}>
                    <div style={{ width: "50%"}}>
                        <Banner type="error" desc />
                    </div>
                    <div style={{ width: "50%"}}>
                        <Banner type="error" />
                    </div>
                </div>

                <div style={{ display: "flex", gap: "1rem"}}>
                    <div style={{ width: "50%"}}>
                        <Banner type="neutral" desc />
                    </div>
                    <div style={{ width: "50%"}}>
                        <Banner type="neutral" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App