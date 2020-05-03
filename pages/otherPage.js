import Link from "next/link";
import css from './otherPage.module.css';

export default () => (
	<div className={css.root}>
		<Link href="/"><a>index page</a></Link>
	</div>
)
