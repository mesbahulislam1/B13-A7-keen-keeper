import React, { useContext } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Cell } from "recharts";
import { ContextProvider } from "../../Context/ContaxtText";

const COLORS = ["#244D3F", "#7F37F5", "#37A163"];

const StatsPage = () => {
  const { contactData } = useContext(ContextProvider);

  const data = [
    {
      name: "Call",
      value: contactData.filter((item) => item.name === "call").length,
    },
    {
      name: "Text",
      value: contactData.filter((item) => item.name === "text").length,
    },
    {
      name: "Video",
      value: contactData.filter((item) => item.name === "video").length,
    },
  ];

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsPage;