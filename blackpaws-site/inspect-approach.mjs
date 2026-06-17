import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);

async function snap(label, scrollY) {
	if (scrollY !== undefined) {
		await page.evaluate((y) => window.scrollTo(0, y), scrollY);
		await page.waitForTimeout(400);
	}
	const data = await page.evaluate(() => {
		const cards = Array.from(document.querySelectorAll('.approach-card'));
		const stack = document.querySelector('.approach-stack');
		return {
			scrollY: window.scrollY,
			stackTop: Math.round(stack.getBoundingClientRect().top),
			cards: cards.map((c, i) => {
				const r = c.getBoundingClientRect();
				const m = getComputedStyle(c).transform.match(/, (-?\d+(?:\.\d+)?), 0, 1\)$/);
				return {
					i,
					viewportTop: Math.round(r.top),
					y: m ? parseFloat(m[1]).toFixed(1) : '?'
				};
			})
		};
	});
	console.log(`\n=== ${label} (scrollY=${data.scrollY}, stack.top=${data.stackTop}) ===`);
	data.cards.forEach((c) => console.log(`  card ${c.i}: y=${c.y}  viewportTop=${c.viewportTop}`));
}

// scroll to approach section start
const approachY = await page.evaluate(() => {
	const r = document.querySelector('#approach').getBoundingClientRect();
	return window.scrollY + r.top;
});
console.log('Approach section starts at scrollY =', approachY);

await snap('at approach start (pin just engaging)', approachY);
await page.screenshot({ path: '/tmp/approach-progress-0.png' });

await snap('+25% of pin range (~card 1 arriving)', approachY + 900 * 2.5 * 0.25);
await page.screenshot({ path: '/tmp/approach-progress-25.png' });

await snap('+50% of pin range (~card 2 arriving)', approachY + 900 * 2.5 * 0.5);
await page.screenshot({ path: '/tmp/approach-progress-50.png' });

await snap('+75% of pin range (~card 3 arriving)', approachY + 900 * 2.5 * 0.75);
await page.screenshot({ path: '/tmp/approach-progress-75.png' });

await snap('+100% of pin range (end)', approachY + 900 * 2.5);
await page.screenshot({ path: '/tmp/approach-progress-100.png' });

await browser.close();
