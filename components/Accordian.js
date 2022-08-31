import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDown } from '@fortawesome/pro-light-svg-icons'
function Accordian({ title, children, show, setShow }) {
  const handleShow = () => {
    setShow((prevState) => ({
      visible: !prevState.visible,
      rotation: prevState.rotation + 180,
    }))
  }
  return (
    <>
      <div className='accordian_title'>
        <h2>{title}</h2>
        <motion.div animate={{ rotateX: show.rotation }}>
          <FontAwesomeIcon icon={faDown} onClick={handleShow} />
        </motion.div>
      </div>
      <AnimatePresence initial={false} mode='wait'>
        {show.visible && (
          <motion.div
            className='accordian_show-hide-content'
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Accordian
