import { Female, Male, RemoveRedEye } from "@mui/icons-material"
import { styled } from "@mui/material"
import DashboardStatsCard from "./cards/DashboardStatsCard"
import { useLazyGetStatsQuery } from "../apis"
import { useEffect, useState } from "react"


const DashboardStats = () => {
  // api call
  const [totalMales, setTotalMales] = useState<number>(0);
  const [totalBrownEyed, setTotalBrownEyed] = useState<number>(0);
  const [totalBlackEyed, setTotalBlackEyed] = useState<number>(0);
  const [getStats] = useLazyGetStatsQuery();

  const StatsBox = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    marginBottom:20,
    gap:20,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  useEffect(()=>{
    const getMales = async()=>{
      try {
        const payload = await getStats({
          key: 'gender',
          value: 'male'
        }).unwrap();
        setTotalMales(payload?.total);
      } catch (error) {
        console.error('rejected', error);
      }
    }
    const getBrownEyed = async()=>{
      try {
        const payload = await getStats({
          key: 'hair.color',
          value: 'Brown'
        }).unwrap();
        setTotalBrownEyed(payload?.total)
      } catch (error) {
        console.error('rejected', error);
      }
    }
    const getBlackEyed = async()=>{
      try {
        const payload = await getStats({
          key: 'hair.color',
          value: 'Black'
        }).unwrap();
        setTotalBlackEyed(payload?.total)
      } catch (error) {
        console.error('rejected', error);
      }
    }
    getMales();
    getBrownEyed();
    getBlackEyed();
  },[getStats]);
  return (
    <StatsBox>
        <DashboardStatsCard title="Total Males" value={totalMales || 0}  icon={Male}/>
        <DashboardStatsCard title="Total Females" value={100-totalMales || 0}  icon={Female} />
        <DashboardStatsCard title="Total Brown Eyed" value={totalBrownEyed || 0}  icon={RemoveRedEye} iconColor="warning" />
        <DashboardStatsCard title="Total Black Eyed" value={totalBlackEyed || 0}  icon={RemoveRedEye} />
    </StatsBox>
  )
}

export default DashboardStats