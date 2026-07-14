import { motion } from 'framer-motion'

const floatEase = [0.42, 0, 0.58, 1] as const

export function ProductScene() {
  return (
    <div className="product-scene" aria-label="A playful Fylo workspace illustration">
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
      <motion.div className="scene-blob blob-yellow" animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: floatEase }} />
      <motion.div className="scene-blob blob-white" animate={{ y: [0, 13, 0], x: [0, -5, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: floatEase }} />
      <motion.div className="scene-card scene-card--back" animate={{ y: [0, -9, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: floatEase }}>
        <div className="mini-top"><span /><span /><span /></div>
        <div className="mini-lines"><i /><i /><i /></div>
        <div className="mini-wave" />
      </motion.div>
      <motion.div className="scene-card scene-card--front" animate={{ y: [0, 8, 0], rotate: [-4, -2, -4] }} transition={{ duration: 6, repeat: Infinity, ease: floatEase }}>
        <div className="front-head"><span className="tiny-logo"><b /><b /><b /></span><i /></div>
        <strong>Today</strong>
        <div className="task"><span className="avatar avatar-yellow" /><i /><b /></div>
        <div className="task"><span className="avatar avatar-light" /><i /><b /></div>
        <div className="task"><span className="avatar avatar-dark" /><i /><b /></div>
        <div className="card-footer"><span>4 tasks</span><b>+</b></div>
      </motion.div>
      <motion.div className="floating-tag tag-one" animate={{ y: [0, -12, 0], rotate: [7, 10, 7] }} transition={{ duration: 4.8, repeat: Infinity, ease: floatEase }}><span>✦</span>In sync</motion.div>
      <motion.div className="floating-tag tag-two" animate={{ y: [0, 9, 0], rotate: [-8, -5, -8] }} transition={{ duration: 5.6, repeat: Infinity, ease: floatEase }}><b>24</b> ideas</motion.div>
      <motion.div className="spark spark-one" animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.div className="spark spark-two" animate={{ scale: [1, 1.35, 1], opacity: [0.45, 1, 0.45] }} transition={{ duration: 3, delay: 0.6, repeat: Infinity }} />
    </div>
  )
}
