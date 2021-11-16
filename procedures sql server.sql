-- tira error de que no reconoce las funciones, sin embargo las ejecuta correctamente igual
create or alter procedure pd_agregarContServ
(
	@deta_cont NVARCHAR(100),
	@fec_acord date,
    @hora_acord char(5),
	@lugar_recogida NVARCHAR(100),
	@lugar_destino NVARCHAR(100),
	@km_rec decimal(6,3),
    @id_rva int,
    @id_serv int,
    @cant_adult int,
    @cant_nino int,
    @cant_3ra int
)
as  
    declare @fec_cont date = getdate();
    declare @costo_total int;
    declare @tipo char(1) = (select tipo_serv from servextras where id_serv = @id_serv);
    declare @rec decimal;
begin
    set @rec = @km_rec;
    if @tipo = 'T' 
		begin
			select @costo_total = dbo.[fn_costo_tour](@cant_adult, @cant_nino, @cant_3ra, @id_serv);
		end;
    else if @tipo = 'V' 
		begin
			set @costo_total = dbo.[fn_costo_transporte](@id_serv, @hora_acord,@rec);
		end;
	insert into cont_serv (fec_cont, costo_total, deta_cont, fec_acord, hora_acord, lugar_recogida, lugar_destino, km_rec, est_cont, id_rva, id_serv)
    values
	(
	@fec_cont,
	@costo_total ,
	@deta_cont ,
	@fec_acord ,
    @hora_acord,
	@lugar_recogida,
	@lugar_destino,
	@km_rec,
    'reservado',
    @id_rva,
    @id_serv
	);
end;
go