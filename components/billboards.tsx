import { Billboard as BillboardType } from "@/types"

interface BillboardListProps {
  data: BillboardType[];
}

const BillboardList: React.FC<BillboardListProps> = ({ data }) => {
  return (
    <div>
      {data.map((bill) => (
        <h2>{bill.label}</h2>
      ))}
    </div>
  )
}

export default BillboardList
