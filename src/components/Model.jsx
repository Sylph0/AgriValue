import React from 'react'
import {Navbar, Footer} from '../components'
import styles from '../style';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// import { underconst } from "../assets";
const Model = () => {
  let d =[]
  
  const [formData, setFormData] = React.useState("<--SELECT OPTION-->")
  const [val, setVal] = React.useState("")
  const handleChange = (event)=>{
  setFormData(event.target.value)
  setVal(event.target.value)
  // d= event.target.value;
  }
  const arr = val
  // console.log(typeof val)

 
  // console.log(d);
  
  const data = arr.split(',');
  console.log(formData);

  // Define chart options
  const options = {
    title: {
      display: true,
      text: 'Agra Onion Prices',
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className= "bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.paddingX}`}>
        <Navbar />

        <div>
          <label htmlFor='state'>State</label><br />
          <select name="state" id="state"
          onChange={handleChange}
          value={formData.state}
          >
            
            <option value="3146.618 , 3120.7913, 3111.6082, 3090.021, 3059.5134, 3032.9712, 3002.1465">SELECT OPTION</option>
            <option value="3146.618 , 3120.7913, 3111.6082, 3090.021, 3059.5134, 3032.9712, 3002.1465">agra Onion</option>
            <option value="762.817,   761.5501,  759.94617, 762.148,   764.1498,  765.165,   767.00323">agra Potato</option>
            <option value="2079.4548, 2033.0336, 2004.9309, 1943.265, 1901.9103, 1862.0172, 1827.2593">agra Tomato</option>
            <option value="2576.1816, 2582.9626, 2586.4749, 2593.2397, 2605.1008, 2615.63, 2632.4822">agra Wheat</option>
            <option value="4945.8906, 5011.807,  5001.9644, 4921.3506, 4866.372,  4834.0156, 4708.2095">Kolkata Onion</option>
            <option value="1457.9038, 1457.9038, 1457.9038, 1450.1425, 1444.4031, 1440.303, 1444.6104">Kolkata Potato</option>
            <option value="3891.6018, 3895.7434, 3893.4268, 3887.1248, 3879.4248, 3879.4248, 3879.4248">Kolkata Rice</option>
            <option value="4136.9175, 4140.795,  4139.2446, 4126.525,  4101.8135, 4211.173,  4248.667">Kolkata Tomatoe</option>
            <option value="2632.499, 2599.1184, 2532.6445, 2423.761,  2312.5247, 2286.3774, 2375.6833">Kolkata Wheat</option>
            <option value="1258.0371, 1271.0831, 1289.8047, 1279.5227, 1266.8822, 1255.2366, 1245.3315">Ludhian Onion</option>
            <option value="197.9333,  196.78488, 195.0955,  193.71071, 193.4314,  193.87207, 194.33809">Ludhian Potato</option>
            <option value="2254.9377, 2191.1323, 2100.8916, 2079.46, 2073.4878, 2124.076, 2181.2837">Ludhian Tomato</option>
            <option value="1973.9066, 1982.6268, 1979.4186, 1963.3589, 1963.9768, 1955.4764, 2081.0322">Madhya Pradesh Wheat</option>
            <option value="2068.5552, 2054.512,  2098.2415, 2147.0188, 2201.257,  2269.9607, 2323.7712">Pune Onion</option>
            <option value="1017.5354, 1057.6205, 1079.7036, 1074.6115, 1074.0459, 1077.6775, 1058.1053">Pune Potato</option>
            <option value="1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0">Pune Rice</option>
            <option value="1033.0123, 1094.645, 1118.2126, 1119.3995, 1148.1329, 1141.0925, 1148.3666">Pune Tomato</option>
            <option value="4614.5786, 4659.0273, 4754.3843, 4751.925, 4645.4966, 4575.6875, 4477.7236">Pune Wheat</option>
            <option value="1797.6506, 1804.7051, 1812.8333, 1814.7529, 1813.6885, 1802.8834, 1794.6499">Surat Onion</option>
            <option value=" 820.65936, 854.2179, 918.7415, 994.1825, 1108.906, 1244.9092, 1354.8939">Surat Onion</option>
            <option value=" 2963.8418, 2977.7808, 2991.0544, 2981.9553, 3000.19, 2993.838, 2997.9265">Surat Rice</option>
            <option value=" 1921.6101, 1952.7839, 2087.6116, 2264.6504, 2388.4263, 2396.1545, 2352.293">Surat Tomato</option>
            <option value="2634.1633, 2609.5308, 2597.8794, 2573.513, 2554.2068, 2536.9373, 2524.0557">Surat Wheat</option>

          </select>
  
      <h2>Agra Prices</h2>

      <Line data={{ labels: ['08/12', '09/12', '10/12', '11/12', '12/12', '13/12', '14/12'], datasets: [{ data, label: 'Price', backgroundColor: 'rgba(255, 99, 132, 0.5)', borderColor: 'rgba(255, 99, 132, 1)', pointRadius: 5 }] }} options={options} />
    
    </div>

        <Footer />

      </div>
      
    </div>
    </div>
  )
}

export default Model