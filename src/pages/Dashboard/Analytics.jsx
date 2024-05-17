import { AnalyticsChart, AnalyticsTable, AnalyticsTableHeader } from "@/components/Dashboard"

const Analytics = () => {
  return (
    <section className="section">
      <AnalyticsChart />
      <AnalyticsTableHeader />
      <AnalyticsTable />
    </section>
  )
}

export default Analytics