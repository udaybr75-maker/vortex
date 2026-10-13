from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://127.0.0.1:5500')
    page.wait_for_timeout(1000)
    
    # Scroll slightly above portals so headers and row 1 are centered
    page.evaluate("window.scrollTo(0, document.getElementById('portals').offsetTop - 60)")
    page.wait_for_timeout(800)
    page.screenshot(path='test_portals_full.png')
    
    # Also capture a close up of the top row
    row = page.query_selector('.tools-grid')
    if row:
        row.screenshot(path='test_tools_grid.png')
        
    browser.close()
    print('Snapshots saved: test_portals_full.png and test_tools_grid.png')
