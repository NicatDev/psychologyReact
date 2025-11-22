// ./Chart.jsx
import React from "react";
import { Bar } from "@ant-design/plots";

const SidebarChart = ({ scores, scaleData }) => {
  const data = scaleData.map((scale) => ({
    label: scale.label,
    value: scores[scale.key] ?? 0,
  }));

  const config = {
    data,
    xField: "label",
    yField: "value",
    
    // 1. Hər bir barın fərqli rəngdə olması üçün:
    //    'label' sahəsini rəngləmə sahəsi olaraq təyin edirik.
    colorField: "label", 
    //    seriesField-i silirik (və ya colorField-ə keçirik), 
    //    həmçinin monoxromatik rəngi silirik.
    //    color: "#3b82f6", // Bu sətri silməlisiniz.
    
    // 2. Bar hündürlüyünün (qalınlığının) çox olması üçün:
    //    'maxBarWidth' xüsusiyyəti ilə maksimum qalınlığı təyin edirik.
    //    Bar itemlarınızın sayına uyğun olaraq dəyəri tənzimləyə bilərsiniz.
    legend: false,
    barStyle: { radius: [4, 4, 0, 0] },
    
    // Əgər maxBarWidth kömək etmirsə, köhnə versiyalar üçün (və ya əlavə olaraq) bunu sınayın:
    style: {
      maxWidth: 35,
    },
  };

  return <Bar {...config} />;
};

export default SidebarChart;