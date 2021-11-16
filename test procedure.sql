

-- testea que funcione la funcion en loop por la cantidad de horas
create or alter procedure pd_prueba
as
declare @count int = 0;
begin
	while @count <=24 begin
		print concat(@count,': ' ,dbo.fn_costo_transporte(1,@count,24.5));
		set @count = @count +1;
	end;
end;
go

exec pd_prueba;