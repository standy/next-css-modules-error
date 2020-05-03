import Link from 'next/link'
import css from './index.module.css';

export default () => (
	<div>
		<Link href="/otherPage"><a>otherPage</a></Link>
		<br/>
		hover on the link and notice the color of header
		<br/>
		<br/>
		<br/>
		<h1 className={css.header}>Hello World, I am being styled using CSS Modules!</h1>
	</div>
)
