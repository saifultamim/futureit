import { SupportManagement } from "@/features/web/dashboard/support/components/SupportManagement"



const SupportPage = async () => {

  let initialPosts = []
  let initialLogs = []
  let initialLinks = {xstatus:"Live",eduteacher:{xteachername:"Md.Shaiful Islam"}}
  let logs = [
    {xtopic:"xtopic1",xcomment:"xcomment1"},
    {xtopic:"xtopic2",xcomment:"xcomment2"},
  ]
  let initialCategories = [
    {xitemcode:"xitemcode",xdesc:"xdesc",}
  ]


  return (
    <div>
      <SupportManagement links={initialLinks} logs={logs} categories={initialCategories} />
    </div>
  )
}

export default SupportPage