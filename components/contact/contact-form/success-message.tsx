import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button, Card, CardBody } from "@heroui/react";

export const SuccessMessage: React.FC<{ onReset: () => void }> = ({
  onReset,
}) => (
  <motion.div
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, y: -20 }}
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    <Card className="w-full">
      <CardBody className="text-center py-12">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              type: "spring",
              stiffness: 200,
            }}
          >
            <Icon className="w-8 h-8 text-success" icon="lucide:check-circle" />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-success mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-default-600 mb-4">
              Thank you for reaching out. I&apos;ll get back to you as soon as
              possible.
            </p>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Button
                aria-label="Send another message"
                color="primary"
                startContent={<Icon icon="lucide:plus" />}
                variant="flat"
                onPress={onReset}
              >
                Send Another Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </CardBody>
    </Card>
  </motion.div>
);
