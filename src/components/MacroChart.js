'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const MacroChart = ({ macros }) => {
  const data = [
    { name: 'Protein', value: macros.protein, color: '#3B82F6', calories: macros.protein * 4 },
    { name: 'Carbs', value: macros.carbs, color: '#10B981', calories: macros.carbs * 4 },
    { name: 'Fat', value: macros.fat, color: '#F59E0B', calories: macros.fat * 9 }
  ]

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B']

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">{data.value}g</p>
          <p className="text-sm text-gray-600">{data.calories} calories</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-full bg-white rounded-xl p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Daily Macro Breakdown</h3>
        <div className="text-center">
          <div className="text-3xl font-extrabold text-gray-900">
            {macros.calories || (macros.protein * 4 + macros.carbs * 4 + macros.fat * 9)}
          </div>
          <div className="text-sm text-gray-600 font-medium">Total Calories</div>
        </div>
      </div>
      
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color, fontWeight: 600 }}>
                  {value}: {entry.payload.value}g
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {data.map((item, index) => (
          <div key={item.name} className="text-center p-3 bg-gray-50 rounded-lg">
            <div 
              className="w-4 h-4 rounded-full mx-auto mb-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="font-bold text-gray-900">{item.value}g</div>
            <div className="text-xs text-gray-600 font-medium">{item.name}</div>
            <div className="text-xs text-gray-500">{item.calories} kcal</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MacroChart
