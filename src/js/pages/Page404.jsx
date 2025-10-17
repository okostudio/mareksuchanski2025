
import { Analytics } from '@vercel/analytics/next'
import Section from '../components/Section'
import Button from '../elements/Button'
import PageWrapper from './PageWrapper'

function Page404() {

    return (
        <PageWrapper>
            <Section class="svh100 light">
                <h1>Oh NO,</h1>
                <h3>Something is not right. <br />
                    Don&rsquo;t fret, you&rsquo;ve just hit a 404 Error</h3>
                <Button to={"/"} class="green">Let&rsquo;s go home</Button>
            </Section>
            <Analytics />
        </PageWrapper>
    )
}

export default Page404
