// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li>
      <div className="blogItem">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <h1 className="name">{currencyName}</h1>
        <p className="name">{usdValue}</p>
        <p className="name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
