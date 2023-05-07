import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, Grid } from '@mui/material';
import { useAttPassComplete, useAttPassIncomplete, useBigChance, useCross, useDefPassComplete, useDefPassIncomplete, useShotOffTarget, useShotOnTarget, useSoccerStats, useTackle } from '../hooks/statshooks';





export default function Home() {
  const { buttoncount1, buttonClicked1} = useAttPassComplete()
  const { buttoncount2, buttonClicked2} = useAttPassIncomplete()
  const { buttoncount3, buttonClicked3} = useDefPassComplete()
  const { buttoncount4, buttonClicked4} = useDefPassIncomplete()
  const { buttoncount5, buttonClicked5} = useShotOnTarget()
  const { buttoncount6, buttonClicked6} = useShotOffTarget()
  const { buttoncount7, buttonClicked7} = useBigChance()
  const { buttoncount8, buttonClicked8} = useCross()
  const { buttoncount9, buttonClicked9} = useTackle()
  
  
  
  return (
    <div className={styles.container}>
  
  
  <Head>
    <title>Soccer Stats</title>
    <link rel="icon" href="/favicon.ico" />
  </Head> 
  <main>
    <h1><center>socca stats</center></h1>
    <p>attack</p>
      <Button sx={{m: 1, p:2}} color='success' variant='outlined' onClick={buttonClicked1}>Att Complete {buttoncount1}</Button>
      <Button sx={{m: 1, p:2}} color='error' variant='outlined' onClick={buttonClicked2}>Att Incomplete {buttoncount2}</Button>
    <p>defense</p>
      <Button sx={{m: 1, p:2}} color='success' variant='outlined' onClick={buttonClicked3}>Def Complete {buttoncount3}</Button>
      <Button sx={{m: 1, p:2}} color='error' variant='outlined' onClick={buttonClicked4}>Def Incomplete {buttoncount4}</Button>
    <p>shots</p>
      <Button sx={{m: 1, p:2, width:160}} color='success' variant='outlined' onClick={buttonClicked5}>Shot On {buttoncount5}</Button>
      <Button sx={{m: 1, p:2, width:170}} color='error' variant='outlined' onClick={buttonClicked6}>Shot Off {buttoncount6}</Button>
    <p>big chances - crosses - tackles</p>
      <Button sx={{m: 1, p:2, width:160}} variant='outlined' onClick={buttonClicked7}>Big Chance {buttoncount7}</Button>
      <Button sx={{m: 1, p:2, width:160}} variant='outlined' onClick={buttonClicked8}>Crosses {buttoncount8}</Button>
      <Button sx={{m: 1, p:2, width:160}} variant='outlined' onClick={buttonClicked9}>Tackles {buttoncount9}</Button>



    
  </main>
    </div>
  )
}
