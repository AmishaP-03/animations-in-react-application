# animations-in-react-application
Building more complex animations with Framer motion

Cons of CSS animations:
1. Lets us animate the apperance of an element in the DOM but not its disapperance. Eg: when a modal is closed, it vanished instantly, there is no way for us to animate it using CSS animations.
2. It is really complex to animate certain elements like the underline bar below the active tab in navbar for example.
3. Difficult to achieve realistic look and feel of certain animations


To overcome these cons, we move towards 3rd party libraries like Framer motion which is an powerful animation library for react

-----How to install it?-----
npm install framer-motion

-----Pointers on how to use it?-----
1. Import 'motion' from framer-motion and replace the element we want to animate with `motion.${HTMLElt}`. For example: <div> = <motion.div>. This will still render div in the DOM but it will be a div with extra capabilities that cen be controlled by framer motion to animate it in an highly performant way.

2. animate prop. <motion.div animate={{x: somevalue, y: somevalue}}>
It accepts an object which describes the animation we want to play, It re-renders the element whenever the value passed to animate prop changes.

3. transition prop. Used to configure the animation that will be played.
<motion.div animate={{x: somevalue, y: somevalue}} transition={{duration: 3, type: 'spring', bounce: 1}}>
a) duration - The animation will now take 3 secs to go from initial state to end state. Lower the value of duration, faster will be the animation.
b) type - describes the type of animation that will be played. Default = spring
c) bounce = 1 -> there will be a bounce, bounce = 0 -> no bounce

3. variants prop
a) Help us defined animation states which can be reused by other props.
b) Helps to trigger animations deep inside a component tree. If variants are set to props (animate, exit etc) in parent component, they can be triggered from child components as well provided variants with the same key are defined there.

