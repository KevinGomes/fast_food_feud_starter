import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {

  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.map((fact, index) => (
        <NutritionalLabelFact id={fact.id} attribute={fact.attribute} label={fact.label} item={props.item}/>
      ))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  const {item} = props
  console.log(props.item.labelKey)
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}:</span>
      <span className="fact-value"> {item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
