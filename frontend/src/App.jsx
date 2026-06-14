import { useState, useEffect } from 'react'
import Nav               from './components/Nav'
import Hero              from './components/Hero'
import HappyHourBanner   from './components/HappyHourBanner'
import Services          from './components/Services'
import Menu              from './components/Menu'
import Gallery           from './components/Gallery'
import Reviews           from './components/Reviews'
import Location          from './components/Location'
import ReservationModal  from './components/ReservationModal'
import Footer            from './components/Footer'
import { getRestaurantInfo, getMenuCategories, getReviews } from './api'

const FALLBACK_INFO = {
  name: 'Moonlite Café',
  tagline: 'Where Every Bite Tells a Story',
  address: 'Banda St, Nairobi',
  phone: '0702 099927',
  website: 'goldenstar.co.ke',
  hours: {
    monday: '8:00 AM - 12:00 AM', tuesday: '8:00 AM - 12:00 AM',
    wednesday: '8:00 AM - 12:00 AM', thursday: '8:00 AM - 12:00 AM',
    friday: '8:00 AM - 1:00 AM', saturday: '9:00 AM - 1:00 AM',
    sunday: '9:00 AM - 12:00 AM',
  },
  happy_hour: '3:00 PM - 6:00 PM daily',
  price_range: 'Ksh 1,000 - 1,500 per person',
  rating: 4.5,
  review_count: 291,
  services: ['Dine-in', 'Takeaway', 'No-contact delivery'],
}

export default function App() {
  const [info,       setInfo]       = useState(FALLBACK_INFO)
  const [categories, setCategories] = useState([])
  const [reviews,    setReviews]    = useState([])
  const [showModal,  setShowModal]  = useState(false)

  useEffect(() => {
    getRestaurantInfo()
      .then(r => setInfo(r.data))
      .catch(() => {})

    getMenuCategories()
      .then(r => { if (r.data?.length) setCategories(r.data) })
      .catch(() => {})

    getReviews()
      .then(r => { if (r.data?.length) setReviews(r.data) })
      .catch(() => {})
  }, [])

  return (
    <>
      <Nav onReserve={() => setShowModal(true)} />
      <Hero        info={info}    onReserve={() => setShowModal(true)} />
      <HappyHourBanner />
      <Services    info={info} />
      <Menu        categories={categories} />
      <Gallery />
      <Reviews     reviews={reviews} info={info} />
      <Location    info={info} />
      <Footer      onReserve={() => setShowModal(true)} />
      {showModal && <ReservationModal onClose={() => setShowModal(false)} />}
    </>
  )
}