import 'autotrack/lib/plugins/event-tracker'
import 'autotrack/lib/plugins/outbound-link-tracker'
import 'autotrack/lib/plugins/url-change-tracker'

window.ga('create', 'UA-35381607-9', 'auto')
window.ga('require', 'cleanUrlTracker')
window.ga('require', 'urlChangeTracker')
window.ga('send', 'pageview')
