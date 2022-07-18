const Ziggy = {"url":"http:\/\/127.0.0.1:8000","port":8000,"defaults":{},"routes":{"cypress.factory":{"uri":"__cypress__\/factory","methods":["POST"]},"cypress.login":{"uri":"__cypress__\/login","methods":["POST"]},"cypress.logout":{"uri":"__cypress__\/logout","methods":["POST"]},"cypress.artisan":{"uri":"__cypress__\/artisan","methods":["POST"]},"cypress.run-php":{"uri":"__cypress__\/run-php","methods":["POST"]},"cypress.csrf-token":{"uri":"__cypress__\/csrf_token","methods":["GET","HEAD"]},"cypress.routes":{"uri":"__cypress__\/routes","methods":["POST"]},"cypress.current-user":{"uri":"__cypress__\/current-user","methods":["POST"]},"horizon.stats.index":{"uri":"horizon\/api\/stats","methods":["GET","HEAD"]},"horizon.workload.index":{"uri":"horizon\/api\/workload","methods":["GET","HEAD"]},"horizon.masters.index":{"uri":"horizon\/api\/masters","methods":["GET","HEAD"]},"horizon.monitoring.index":{"uri":"horizon\/api\/monitoring","methods":["GET","HEAD"]},"horizon.monitoring.store":{"uri":"horizon\/api\/monitoring","methods":["POST"]},"horizon.monitoring-tag.paginate":{"uri":"horizon\/api\/monitoring\/{tag}","methods":["GET","HEAD"]},"horizon.monitoring-tag.destroy":{"uri":"horizon\/api\/monitoring\/{tag}","methods":["DELETE"]},"horizon.jobs-metrics.index":{"uri":"horizon\/api\/metrics\/jobs","methods":["GET","HEAD"]},"horizon.jobs-metrics.show":{"uri":"horizon\/api\/metrics\/jobs\/{id}","methods":["GET","HEAD"]},"horizon.queues-metrics.index":{"uri":"horizon\/api\/metrics\/queues","methods":["GET","HEAD"]},"horizon.queues-metrics.show":{"uri":"horizon\/api\/metrics\/queues\/{id}","methods":["GET","HEAD"]},"horizon.jobs-batches.index":{"uri":"horizon\/api\/batches","methods":["GET","HEAD"]},"horizon.jobs-batches.show":{"uri":"horizon\/api\/batches\/{id}","methods":["GET","HEAD"]},"horizon.jobs-batches.retry":{"uri":"horizon\/api\/batches\/retry\/{id}","methods":["POST"]},"horizon.pending-jobs.index":{"uri":"horizon\/api\/jobs\/pending","methods":["GET","HEAD"]},"horizon.completed-jobs.index":{"uri":"horizon\/api\/jobs\/completed","methods":["GET","HEAD"]},"horizon.failed-jobs.index":{"uri":"horizon\/api\/jobs\/failed","methods":["GET","HEAD"]},"horizon.failed-jobs.show":{"uri":"horizon\/api\/jobs\/failed\/{id}","methods":["GET","HEAD"]},"horizon.retry-jobs.show":{"uri":"horizon\/api\/jobs\/retry\/{id}","methods":["POST"]},"horizon.jobs.show":{"uri":"horizon\/api\/jobs\/{id}","methods":["GET","HEAD"]},"horizon.index":{"uri":"horizon\/{view?}","methods":["GET","HEAD"],"wheres":{"view":"(.*)"}},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"login":{"uri":"login","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"reset-password","methods":["POST"]},"logout":{"uri":"logout","methods":["POST"]},"dashboard.index":{"uri":"dashboard","methods":["GET","HEAD"]},"dashboard.settings.general":{"uri":"dashboard\/settings","methods":["GET","HEAD"]},"dashboard.settings.system-status":{"uri":"dashboard\/settings\/system-status","methods":["GET","HEAD"]},"dashboard.users.index":{"uri":"dashboard\/users","methods":["GET","HEAD"]},"dashboard.users.create":{"uri":"dashboard\/users\/create","methods":["GET","HEAD"]},"dashboard.users.store":{"uri":"dashboard\/users","methods":["POST"]},"dashboard.users.edit":{"uri":"dashboard\/users\/{user}\/edit","methods":["GET","HEAD"],"bindings":{"user":"id"}},"dashboard.users.update":{"uri":"dashboard\/users\/{user}","methods":["PUT","PATCH"],"bindings":{"user":"id"}},"dashboard.users.destroy":{"uri":"dashboard\/users\/{user}","methods":["DELETE"],"bindings":{"user":"id"}},"dashboard.users.roles.index":{"uri":"dashboard\/users\/roles","methods":["GET","HEAD"]},"dashboard.users.roles.create":{"uri":"dashboard\/users\/roles\/create","methods":["GET","HEAD"]},"dashboard.users.roles.store":{"uri":"dashboard\/users\/roles","methods":["POST"]},"dashboard.users.roles.edit":{"uri":"dashboard\/users\/roles\/{role}\/edit","methods":["GET","HEAD"],"bindings":{"role":"id"}},"dashboard.users.roles.update":{"uri":"dashboard\/users\/roles\/{role}","methods":["PUT","PATCH"],"bindings":{"role":"id"}},"dashboard.users.roles.destroy":{"uri":"dashboard\/users\/roles\/{role}","methods":["DELETE"],"bindings":{"role":"id"}},"dashboard.users.permissions.index":{"uri":"dashboard\/users\/permissions","methods":["GET","HEAD"]},"dashboard.users.permissions.create":{"uri":"dashboard\/users\/permissions\/create","methods":["GET","HEAD"]},"dashboard.users.permissions.store":{"uri":"dashboard\/users\/permissions","methods":["POST"]},"dashboard.users.permissions.edit":{"uri":"dashboard\/users\/permissions\/{permission}\/edit","methods":["GET","HEAD"],"bindings":{"permission":"id"}},"dashboard.users.permissions.update":{"uri":"dashboard\/users\/permissions\/{permission}","methods":["PUT","PATCH"],"bindings":{"permission":"id"}},"dashboard.users.permissions.destroy":{"uri":"dashboard\/users\/permissions\/{permission}","methods":["DELETE"],"bindings":{"permission":"id"}},"dashboard.sites.servers.index":{"uri":"dashboard\/sites\/servers","methods":["GET","HEAD"]},"dashboard.sites.servers.create":{"uri":"dashboard\/sites\/servers\/create","methods":["GET","HEAD"]},"dashboard.sites.servers.store":{"uri":"dashboard\/sites\/servers","methods":["POST"]},"dashboard.sites.servers.show":{"uri":"dashboard\/sites\/servers\/{server}","methods":["GET","HEAD"]},"dashboard.sites.servers.edit":{"uri":"dashboard\/sites\/servers\/{server}\/edit","methods":["GET","HEAD"],"bindings":{"server":"id"}},"dashboard.sites.servers.update":{"uri":"dashboard\/sites\/servers\/{server}","methods":["PUT","PATCH"],"bindings":{"server":"id"}},"dashboard.sites.servers.destroy":{"uri":"dashboard\/sites\/servers\/{server}","methods":["DELETE"],"bindings":{"server":"id"}},"dashboard.sites.stacks.index":{"uri":"dashboard\/sites\/stacks","methods":["GET","HEAD"]},"dashboard.sites.stacks.create":{"uri":"dashboard\/sites\/stacks\/create","methods":["GET","HEAD"]},"dashboard.sites.stacks.store":{"uri":"dashboard\/sites\/stacks","methods":["POST"]},"dashboard.sites.stacks.show":{"uri":"dashboard\/sites\/stacks\/{stack}","methods":["GET","HEAD"]},"dashboard.sites.stacks.edit":{"uri":"dashboard\/sites\/stacks\/{stack}\/edit","methods":["GET","HEAD"],"bindings":{"stack":"id"}},"dashboard.sites.stacks.update":{"uri":"dashboard\/sites\/stacks\/{stack}","methods":["PUT","PATCH"],"bindings":{"stack":"id"}},"dashboard.sites.stacks.destroy":{"uri":"dashboard\/sites\/stacks\/{stack}","methods":["DELETE"],"bindings":{"stack":"id"}},"dashboard.sites.":{"uri":"dashboard\/sites\/{site}\/restart","methods":["POST"],"bindings":{"site":"id"}},"dashboard.sites.index":{"uri":"dashboard\/sites","methods":["GET","HEAD"]},"dashboard.sites.create":{"uri":"dashboard\/sites\/create","methods":["GET","HEAD"]},"dashboard.sites.store":{"uri":"dashboard\/sites","methods":["POST"]},"dashboard.sites.show":{"uri":"dashboard\/sites\/{site}","methods":["GET","HEAD"],"bindings":{"site":"id"}},"dashboard.sites.edit":{"uri":"dashboard\/sites\/{site}\/edit","methods":["GET","HEAD"],"bindings":{"site":"id"}},"dashboard.sites.update":{"uri":"dashboard\/sites\/{site}","methods":["PUT","PATCH"],"bindings":{"site":"id"}},"dashboard.sites.destroy":{"uri":"dashboard\/sites\/{site}","methods":["DELETE"],"bindings":{"site":"id"}},"dashboard.sites.force-destroy":{"uri":"dashboard\/sites\/{site}\/force-delete","methods":["DELETE"]},"dashboard.sites.restore":{"uri":"dashboard\/sites\/{site}\/restore","methods":["POST"]},"dashboard.slacks.wordpress.new":{"uri":"dashboard\/stacks\/wordpress\/new","methods":["GET","HEAD"]},"dashboard.slacks.plugins":{"uri":"dashboard\/stacks\/plugins","methods":["GET","HEAD"]},"dashboard.slacks.themes":{"uri":"dashboard\/stacks\/themes","methods":["GET","HEAD"]},"dashboard.slacks.plans":{"uri":"dashboard\/stacks\/plans","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };