function CategoryButtons({getTechRoles, getData}) {

    const handleCategoryTech = () => {
        getTechRoles('tech')
    }
    const handleCategoryNonTech = () => {
        getTechRoles('nonTech')
    }


  return (
    <div className="tech-btns">
        <button className="btn" onClick={getData}>כל התפקידים</button>
        <button className="btn" onClick={handleCategoryTech}>תפקידים טכנולוגיים</button>
        <button className="btn" onClick={handleCategoryNonTech}>תפקידים לא טכנולוגיים</button>
        
    </div>
  )
}

export default CategoryButtons