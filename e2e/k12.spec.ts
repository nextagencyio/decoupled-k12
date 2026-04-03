import { test, expect } from '@playwright/test'

test.describe('K-12 School Website', () => {

  test('homepage loads with school name and hero', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Lakeview/i)
    // Hero section should be visible
    await expect(page.locator('text=Lakeview School District').first()).toBeVisible()
  })

  test('homepage displays stats section', async ({ page }) => {
    await page.goto('/')
    // Stats from imported content
    await expect(page.locator('text=1,200+').first()).toBeVisible()
  })

  test('homepage displays school life section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=School Life at Lakeview')).toBeVisible()
  })

  test('teachers page lists teachers', async ({ page }) => {
    await page.goto('/teachers')
    await expect(page.locator('h1')).toContainText('Teachers')
    // Check that at least one teacher card appears
    await expect(page.locator('text=Maria Martinez').first()).toBeVisible()
    await expect(page.locator('text=David Chen').first()).toBeVisible()
  })

  test('teacher detail page loads', async ({ page }) => {
    await page.goto('/teachers/maria-martinez')
    await expect(page.locator('text=Maria Martinez').first()).toBeVisible()
  })

  test('programs page lists programs', async ({ page }) => {
    await page.goto('/programs')
    await expect(page.locator('h1')).toContainText('Programs')
    await expect(page.locator('text=STEM Academy').first()).toBeVisible()
  })

  test('program detail page loads', async ({ page }) => {
    await page.goto('/programs/stem-academy')
    await expect(page.locator('text=STEM Academy').first()).toBeVisible()
  })

  test('events page lists events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.locator('text=Back to School Night').first()).toBeVisible()
  })

  test('event detail page loads', async ({ page }) => {
    await page.goto('/events/back-to-school-night')
    await expect(page.locator('text=Back to School Night').first()).toBeVisible()
  })

  test('news page lists news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('News')
    await expect(page.locator('text=STEM Award').first()).toBeVisible()
  })

  test('news detail page loads', async ({ page }) => {
    await page.goto('/news/stem-award')
    await expect(page.locator('text=STEM Award').first()).toBeVisible()
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('text=Riverside K-12 Academy').first()).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/teachers"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/programs"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/events"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/news"]').first()).toBeVisible()
  })
})
