const Button = ({ fullWidth, buttonType, buttonText, buttonImg, handleClick, setter }) => {
  const handler = () => {
    if(handleClick){
      handleClick()
    }
    if(setter){
      setter(state => !state)
    }
  }
  
  if (buttonType === 'primary') {
    return (
      <button onClick={handler} className={fullWidth ? 'w-full' : '' + 'py-1 border-2 border-teal-600 bg-teal-600 rounded-lg flex justify-center items-center gap-2 hover:bg-teal-700 hover:border-teal-700'}>
        {buttonImg && <img src={buttonImg} alt='button' />}
        {buttonText && <p className='px-4 font-semibold text-white'>{buttonText}</p>}
      </button>
    )
  }
  if (buttonType === 'danger') {
    return (
      <button onClick={handler} className={fullWidth ? 'w-full' : '' + 'py-1 border-2 border-red-800 bg-red-800 rounded-lg flex justify-center items-center gap-2 hover:bg-red-900 hover:border-red-900'}>
        {buttonImg && <img src={buttonImg} alt='button' />}
        {buttonText && <p className='px-4 font-semibold text-white'>{buttonText}</p>}
      </button>
    )
  }
  return (
    <button onClick={handler} className={fullWidth ? 'w-full' : '' + 'py-1 border-2 border-slate-300 rounded-lg flex justify-center items-center gap-2 hover:bg-slate-100'}>
      {buttonImg && <img src={buttonImg} alt='button' />}
      {buttonText && <p className='px-4 font-semibold text-slate-600'>{buttonText}</p>}
    </button>
  )
}

export default Button
