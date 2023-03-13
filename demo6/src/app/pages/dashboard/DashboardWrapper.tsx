import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  ListsWidget5,
  MixedWidget8,
  StatisticsWidget5,
  MixedWidget7,
  ListsWidget9,
  TablesWidget9,
  ListsWidget3,
  TablesWidget11,
  MixedWidget6,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]} description='#XRS-45670'>
        Dashboard
      </PageTitle>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm002.svg'
            color='danger'
            iconColor='white'
            title='Shopping Cart'
            titleColor='white'
            description='Lands, Houses, Ranchos, Farms'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm008.svg'
            color='primary'
            iconColor='white'
            title='Appartments'
            titleColor='white'
            descriptionColor='white'
            description='Flats, Shared Rooms, Duplex'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='/media/icons/duotune/graphs/gra005.svg'
            color='success'
            iconColor='white'
            titleColor='white'
            descriptionColor='white'
            title='Sales Stats'
            description='50% Increased for FY20'
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget6
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='150px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget7 className='card-xl-stretch' chartColor='primary' chartHeight='225px' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <MixedWidget8
            className='card-xl-stretch mb-5 mb-xl-8'
            chartColor='danger'
            chartHeight='150px'
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xxl-4'>
          <ListsWidget9 className='card-xxl-stretch' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-8'>
          <TablesWidget9 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <ListsWidget4 className='card-xl-stretch mb-xl-8' />
        </div>

        <div className='col-xl-4'>
          <ListsWidget5 className='card-xl-stretch mb-xl-8' />
        </div>

        <div className='col-xl-4'>
          <ListsWidget3 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='g-5 gx-xxl-8'>
        <TablesWidget11 className='' />
      </div>
      {/* end::Row */}
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
