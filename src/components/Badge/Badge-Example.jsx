import React from 'react'
import Badge from './Badge'

const BadgeExample = () => {
    return (
        <div className="container">
            <h2 className="marker">Badges</h2>
            <div>
                <Badge textColor="#1F2937" backgroundColor="#F3F4F6" />
                <Badge textColor="#991B1B" backgroundColor="#FEE2E2" />
                <Badge textColor="#92400E" backgroundColor="#FEF3C7" />
                <Badge textColor="#065F46" backgroundColor="#D1FAE5" />
                <Badge textColor="#1E40AF" backgroundColor="#DBEAFE" />
                <Badge textColor="#3730A3" backgroundColor="#E0E7FF" />
                <Badge textColor="#5B21B6" backgroundColor="#EDE9FE" />
                <Badge textColor="#9D174D" backgroundColor="#FCE7F3" />
            </div>

            <div>
                <Badge textColor="#1F2937" backgroundColor="#F3F4F6" pill />
                <Badge textColor="#991B1B" backgroundColor="#FEE2E2" pill />
                <Badge textColor="#92400E" backgroundColor="#FEF3C7" pill />
                <Badge textColor="#065F46" backgroundColor="#D1FAE5" pill />
                <Badge textColor="#1E40AF" backgroundColor="#DBEAFE" pill />
                <Badge textColor="#3730A3" backgroundColor="#E0E7FF" pill />
                <Badge textColor="#5B21B6" backgroundColor="#EDE9FE" pill />
                <Badge textColor="#9D174D" backgroundColor="#FCE7F3" pill />
            </div>
        </div>
    )
}

export default BadgeExample