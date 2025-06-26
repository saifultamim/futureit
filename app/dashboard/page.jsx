import Card from '@/components/ui/card/Card'
import CardContent from '@/components/ui/card/CardContent'
import CardHead from '@/components/ui/card/CardHead'
import CardTitle from '@/components/ui/card/CardTitle'
import NoticeList from '@/features/web/dashboard/Notice/components/List'

import AssignBatchList from '@/features/web/dashboard/StudentAssignBatchs'
import ActiveCourseList from '@/features/web/dashboard/StudentEnrollCourses'
import React from 'react'

const dashboardPage = () => {

  const purchasedCourses = [
    {xsellsdtid:1,xitemdesc:'xitemdesc'}
  ]
  const batches = [
    {batch:{xbatchname:"xbatchname"},seitem:{xdesc:"xdesc"}}
  ]
  const batchNotices =[
    
{  xsl: 1,
  xdate: '3/12/2025',
  seitem: { xdesc: 'xdesc' },
  batch: { xbatchname: 'xbatchname' },
  xbatch: 'xbatch',
  xtitle: 'xtitle',
  xdescription: 'xdescription',
}

  ]
  return (
    <div>
      <div className="space-y-6">
      <div className="md:w-1/2">
        <div className="flex flex-col gap-2 text-lg md:text-xl xl:text-3xl font-title text-primary-500">
          <div>
            Welcome back,&nbsp;
            <span className="font-bold text-2xl">Johny Deep</span>
          </div>
          <span className="text-lg">Your ID is: 12037</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Enroll Courses */}
        <Card>
          <CardHead>
            <CardTitle>Enroll Courses</CardTitle> 
           </CardHead>
          <CardContent>
            <ActiveCourseList courses={purchasedCourses} />
          </CardContent>
        </Card>

        {/* Assign Batches */}
        <Card>
          <CardHead>
            <CardTitle>Assign Batches</CardTitle>
          </CardHead>
          <CardContent>
            <AssignBatchList assignBatches={batches} />
          </CardContent>
        </Card>

        {/* Batch Notices */}
        <Card>
          <CardHead>
            <CardTitle>Recent Notices</CardTitle>
          </CardHead>
          <CardContent>
            <NoticeList notices={batchNotices} />
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default dashboardPage
