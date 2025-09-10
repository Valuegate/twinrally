import './App.css'

import { Header } from './components/HomePage/Header'
import { FeatureOne } from './components/HomePage/FeatureOne'
import { FeatureTwo } from './components/HomePage/FeatureTwo'
import { CallToAction } from './components/HomePage/CallToAction'
import { QuickHighlight } from './components/HomePage/QuickHighLight'
import { NewsLetter } from './components/HomePage/NewsLetter'
import { TwinCommunity } from './components/HomePage/TwinCommunity'


function App() {

  return (
    <div className='bg-[#040E28]'>
      <Header />

      <FeatureOne />

      <TwinCommunity />

      <FeatureTwo />

      <CallToAction />

      <QuickHighlight />

      <NewsLetter />
    </div>
  )
}

export default App
