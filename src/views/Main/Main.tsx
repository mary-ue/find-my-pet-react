import { LeafletContainer } from "../../components/LeafletContainer/LeafletContainer"
import { LeafletMap } from "../../components/LeafletMap/LeafletMap"

export const Main = () => {
  return (
    <div className="row">
      <div className="col">
        <LeafletContainer>
          <LeafletMap />
        </LeafletContainer>
      </div>
    </div>
  )
}