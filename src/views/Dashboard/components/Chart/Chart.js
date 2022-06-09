import React from 'react';
import {AreaChart, ResponsiveContainer, Area, XAxis, YAxis, Tooltip, CartesianGrid} from "recharts";
import {CHART_VALUES} from "../../../../utils/helpers/constants";

function Chart() {

	return (
		<ResponsiveContainer width="100%" height={400}>
			<AreaChart data={CHART_VALUES}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}/>
						<stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}/>
					</linearGradient>
				</defs>
				<defs>
					<linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#e63946" stopOpacity={0.4}/>
						<stop offset="75%" stopColor="#e63946" stopOpacity={0.05}/>
					</linearGradient>
				</defs>

				<Area dataKey="value" stroke="#e63946" fill="url(#colorUv2)"/>
				<Area dataKey="value2" stroke="#2451B7" fill="url(#colorUv)"/>
				<XAxis dataKey="date" axisLine={false} tickLine={false} />
				<YAxis dataKey="value" axisLine={false} tickLine={false} tickCount={6} tickFormatter={number => `$${number.toFixed(2)}`}/>
				<Tooltip />
				<CartesianGrid opacity={0.1} vertical={false}/>
			</AreaChart>
		</ResponsiveContainer>
	);
}

export default Chart;