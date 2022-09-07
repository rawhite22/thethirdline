import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDown } from '@fortawesome/pro-light-svg-icons'
function Accordian({ title, children, show, setShow, rotation }) {
  return (
    <div onClick={setShow} className='accordian'>
      <div className={show ? 'accordian_title open' : 'accordian_title'}>
        <h2>{title}</h2>
        <motion.div animate={{ rotateX: rotation }}>
          <FontAwesomeIcon className='icon' icon={faDown} />
        </motion.div>
      </div>
      <AnimatePresence initial={false} mode='wait'>
        {show && (
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
    </div>
  )
}
export default Accordian
