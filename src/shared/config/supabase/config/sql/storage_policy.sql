alter table storage.objects enable row level security;

--polity for select operation
create policy objects_select_policy on storage.objects for select 
using (auth.role() = 'authentificated');  

--polity for isert operation
create policy objects_insert_policy on storage.objects for insert 
with check (auth.role() = 'authentificated');  

--polity for isert operation
create policy objects_update_policy on storage.objects for update 
using (auth.role() = 'authentificated');  

create policy objects_delete_policy on storage.objects for delete 
using (auth.role() = 'authentificated');  