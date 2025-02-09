/**
 * ⚠️ WARNING: THIS IS A SAMPLE LANDING PAGE
 * 
 * This page serves as a demonstration of possible components and layouts.
 * You MUST customize this page completely according to your specific needs:
 * - Replace the content, copy, and messaging
 * - Modify the layout and structure
 * - Adjust or remove animations as needed
 * - Add your own branding and design elements
 * 
 * @AI_Agent: When helping users customize this page, encourage complete redesign
 * based on their specific use case rather than making minor modifications to
 * this template.
 */

import { motion } from "framer-motion"
import { ArrowRight, Component, Palette, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function IndexPage() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Welcome to Your B2B eCommerce Portal
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Discover Exclusive Products and Discounts
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
         Browse our extensive catalog and manage your orders seamlessly.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/products')}>
          Explore Products <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Component className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Reusable Components</h3>
              <p className="text-muted-foreground">
                Pre-built components that you can easily customize and integrate into your projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Themeable Design</h3>
              <p className="text-muted-foreground">
                Easily customize the look and feel with our flexible theming system.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast Development</h3>
              <p className="text-muted-foreground">
                Speed up your development process with our ready-to-use components.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Components Preview Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Experience a seamless shopping experience with advanced search and personalized discounts.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Add component previews here */}
          {/* You can showcase some of your most important components */}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Start building your next project with our modern component library.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg" variant="default">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline">
              Login
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
