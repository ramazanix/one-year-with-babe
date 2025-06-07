import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    rotate: 0,
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    rotate: i % 2 === 0 ? -10 : 10,
    transition: {
      type: "spring",
      delay: 0.4, //+ i * 0.2
      duration: 1.2,
    },
  }),
};

export const Greetings: React.FC = () => {
  return (
    <div className="greetings-wrapper">
      <motion.div
        data-content="🩷"
        className="greetings-container"
        custom={0}
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{
          position: "absolute",
          top: "150px",
          left: "250px",
          boxShadow: "#424242 -8px 16px 0 0",
        }}
      >
        <motion.div className="greetings">
          <h1>你好</h1>
        </motion.div>
        <motion.div className="greetings">
          <h1>我的小阳光</h1>
        </motion.div>
      </motion.div>
      <motion.div
        data-content="🥰"
        className="greetings-container"
        custom={1}
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{
          position: "absolute",
          top: "550px",
          right: "250px",
          boxShadow: "#424242 8px 16px 0 0",
        }}
      >
        <motion.div className="greetings">
          <h1>我很高兴</h1>
        </motion.div>
        <motion.div className="greetings">
          <h1>我有你</h1>
        </motion.div>
      </motion.div>
      <motion.div
        data-content="🤩"
        className="greetings-container"
        custom={2}
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{
          position: "absolute",
          top: "950px",
          left: "250px",
          boxShadow: "#424242 -8px 16px 0 0",
        }}
      >
        <motion.div className="greetings">
          <h1>我们在一起</h1>
        </motion.div>
        <motion.div className="greetings">
          <h1>已经一年了</h1>
        </motion.div>
      </motion.div>
      <motion.div
        data-content="☺️"
        className="greetings-container"
        custom={3}
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        style={{
          position: "absolute",
          top: "1350px",
          right: "250px",
          boxShadow: "#424242 8px 16px 0 0",
        }}
      >
        <motion.div className="greetings">
          <h1>今年对我来说</h1>
        </motion.div>
        <motion.div className="greetings">
          <h1>太高兴了</h1>
        </motion.div>
      </motion.div>
      <motion.div
        data-content="💞"
        className="greetings-container"
        custom={4}
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            delay: 0.4,
            duration: 0.6,
          },
        }}
        viewport={{ once: true }}
        style={{
          position: "absolute",
          top: "2000px",
          left: "50%",
          translate: "-50% ",
          boxShadow: "#424242 0px 8px 0 4px",
        }}
      >
        <motion.div className="greetings">
          <h1>我好爱你</h1>
        </motion.div>
        <motion.div className="greetings">
          <h1>我亲爱的宝藏</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Greetings;
