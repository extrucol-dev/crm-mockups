const CRM_SEED_DATA = {
  "meta": {
    "fuente": "WHATSAPP Y REDES(Tabla1).csv",
    "total_registros": 23,
    "fecha_export": "2025-09-25",
    "version": "1.0.0"
  },
  "usuarios": {
    "ejecutivos": [
      {"id": 1, "nombre": "PAOLA", "email": "paola@extrucol.com", "rol": "ejecutivo", "departamento": "Santander", "avatar": "PA", "color": "#3B82F6"},
      {"id": 2, "nombre": "DIANA", "email": "diana@extrucol.com", "rol": "coordinador", "departamento": "Antioquia", "avatar": "DI", "color": "#8B5CF6"},
      {"id": 3, "nombre": "ALEXIS", "email": "alexis@extrucol.com", "rol": "ejecutivo", "departamento": "Cundinamarca", "avatar": "AL", "color": "#10B981"},
      {"id": 4, "nombre": "ALVARO", "email": "alvaro@extrucol.com", "rol": "ejecutivo", "departamento": "Cundinamarca", "avatar": "AV", "color": "#F59E0B"},
      {"id": 5, "nombre": "GONZALO", "email": "gonzalo@extrucol.com", "rol": "ejecutivo", "departamento": "Santander", "avatar": "GO", "color": "#EF4444"}
    ]
  },
  "origenes": [
    {"id": 1, "nombre": "WHATSAPP", "color": "#25D366"},
    {"id": 2, "nombre": "INSTAGRAM", "color": "#E4405F"},
    {"id": 3, "nombre": "FACEBOOK", "color": "#1877F2"}
  ],
  "intereses": [
    {"id": 1, "nombre": "TUBERIA", "slug": "tuberias"},
    {"id": 2, "nombre": "TUBERIA HDPE", "slug": "tuberias"},
    {"id": 3, "nombre": "TUBERIA Y ACCESORIOS", "slug": "tuberias"},
    {"id": 4, "nombre": "ACCESORIOS/MEDIDORES", "slug": "accesorios"},
    {"id": 5, "nombre": "EQUIPOS", "slug": "equipos"},
    {"id": 6, "nombre": "TRASLADO A DISTRIBUIDOR", "slug": "distribuidor"}
  ],
  "estados_lead": [
    {"id": 1, "nombre": "Nuevo", "slug": "nuevo", "color": "#3B82F6", "tipo": "abierto", "orden": 1},
    {"id": 2, "nombre": "Contactado", "slug": "contactado", "color": "#A855F7", "tipo": "abierto", "orden": 2},
    {"id": 3, "nombre": "Interesado", "slug": "interesado", "color": "#F39610", "tipo": "calificado", "orden": 3},
    {"id": 4, "nombre": "Enviado a distribuidor", "slug": "enviado_distribuidor", "color": "#8B5CF6", "tipo": "calificado", "orden": 4},
    {"id": 5, "nombre": "No Interesado", "slug": "no_interesado", "color": "#EF4444", "tipo": "descalificado", "orden": 5}
  ],
  "estados_oportunidad": [
    {"id": 1, "nombre": "Prospeccion", "slug": "prospeccion", "color": "#3B82F6", "orden": 1},
    {"id": 2, "nombre": "Calificacion", "slug": "calificacion", "color": "#8B5CF6", "orden": 2},
    {"id": 3, "nombre": "Propuesta", "slug": "propuesta", "color": "#F39610", "orden": 3},
    {"id": 4, "nombre": "Negociacion", "slug": "negociacion", "color": "#14B8A6", "orden": 4},
    {"id": 5, "nombre": "Cerrada Ganada", "slug": "ganada", "color": "#10B981", "orden": 5},
    {"id": 6, "nombre": "Cerrada Perdida", "slug": "perdida", "color": "#EF4444", "orden": 6}
  ],
  "departamentos": [
    {"nombre": "ANTIOQUIA", "ciudades": ["MEDELLIN", "APARTADO", "ITAGUI", "LA CEJA", "PACORA"]},
    {"nombre": "ATLANTICO", "ciudades": ["BARRANQUILLA", "LURUACO"]},
    {"nombre": "BOLIVAR", "ciudades": ["CARTAGENA", "TURBACO", "MAGANGUE"]},
    {"nombre": "CALDAS", "ciudades": ["LA DORADA", "SANTA ROSA DE CABAL"]},
    {"nombre": "CHOCO", "ciudades": ["QUIBDO"]},
    {"nombre": "CUNDINAMARCA", "ciudades": ["TOCANCIPA", "SABANA LARGA"]},
    {"nombre": "CORDOBA", "ciudades": ["CORDOBA"]},
    {"nombre": "RISARALDA", "ciudades": ["PEREIRA", "DOSQUEBRADAS"]},
    {"nombre": "SANTANDER", "ciudades": ["BUCARAMANGA", "FLORIDABLANCA"]},
    {"nombre": "SUCRE", "ciudades": ["SUCRE", "SAN MARCOS SUCRE"]},
    {"nombre": "VALLE DEL CAUCA", "ciudades": ["CALI", "YUMBO"]}
  ],
  "leads": [
    {"id": "L001", "nombre": "NATALIA", "empresa": "UNION TEMPORAL SAN MARCOS", "email": "administrativo@utsanmarcos.com", "telefono": "3017352826", "origen": "INSTAGRAM", "estado": "Nuevo", "intereses": ["TUBERIA HDPE"], "tipo_cliente": "NUEVO", "ciudad": "SUCRE", "score": 65, "valor": null, "asesor": "PAOLA", "comentarios": [{"fecha": "2025-02-15", "texto": "SE HACE OFERTACON ADS EL CLIENTE DEFINIRA LA COMPRA POR PRECIO", "tipo": "LLAMADA"}, {"fecha": "2025-04-24", "texto": "la compra se cambio a PVC por diferencia de 20% ante tuberia corrugada de PEAD", "tipo": "EMAIL"}, {"fecha": "2025-05-06", "texto": "seguimiento", "tipo": "VISITA"}], "fecha_creacion": "2025-02-10", "ultima_actividad": "2025-05-06"},
    {"id": "L002", "nombre": "SANTIAGO GONZALEZ", "empresa": "GRUPO CIVILEC", "email": "sagonzalezpe@gmail.com", "telefono": "3217955993", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "PACORA", "score": 72, "valor": null, "asesor": "DIANA", "comentarios": [{"fecha": "2025-02-27", "texto": "Se le realiza oferta para el sector alcantarillado. cantidad ofertada, 42mts de 500 mm PN10", "tipo": "EMAIL"}, {"fecha": "2025-04-24", "texto": "Realizaron la compra a traves de SYE por temas de fabricacion minima", "tipo": "LLAMADA"}], "fecha_creacion": "2025-02-20", "ultima_actividad": "2025-04-24"},
    {"id": "L003", "nombre": "DANIELA HENAO", "empresa": "CMM", "email": "contacto@cmmeeu.com", "telefono": "3107094712", "origen": "WHATSAPP", "estado": "No Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "MEDELLIN", "score": 30, "valor": null, "asesor": "DIANA", "comentarios": [{"fecha": "2025-04-23", "texto": "SE ENVIA 2 OFERTAS PARA ESPECIFICACION DE PRODUCTOS # 30396 - 30397", "tipo": "EMAIL"}, {"fecha": "2025-04-28", "texto": "El proyecto aun no es viable por temas de costos Vs pvc", "tipo": "LLAMADA"}], "fecha_creacion": "2025-04-18", "ultima_actividad": "2025-04-28"},
    {"id": "L004", "nombre": "MADELIN NAMIAS", "empresa": "ADOS INGENIERIA", "email": "adospresupuestos@gmail.com", "telefono": "3017031093", "origen": "INSTAGRAM", "estado": "Enviado a distribuidor", "intereses": ["TUBERIA", "ACCESORIOS/MEDIDORES"], "tipo_cliente": "NUEVO", "ciudad": "APARTADO", "score": 78, "valor": 2000000, "asesor": "DIANA", "comentarios": [{"fecha": "2025-04-25", "texto": "realizo compra a reinaldo navarro por 2.000.000", "tipo": "LLAMADA"}], "fecha_creacion": "2025-04-20", "ultima_actividad": "2025-04-25"},
    {"id": "L005", "nombre": "ERIKA REYES", "empresa": "MONTAJES JM", "email": "ereyes@montajesjm.com", "telefono": "3165293563", "origen": "WHATSAPP", "estado": "Contactado", "intereses": ["EQUIPOS"], "tipo_cliente": "NUEVO", "ciudad": "LA DORADA", "score": 74, "valor": null, "asesor": "DIANA", "comentarios": [{"fecha": "2025-04-19", "texto": "Seguimiento telefoncio, oferta de tubería y accesorios pealpe", "tipo": "LLAMADA"}, {"fecha": "2025-05-21", "texto": "oferta 30987, seguimiento", "tipo": "EMAIL"}, {"fecha": "2025-06-13", "texto": "seguimiento, fase de definición", "tipo": "LLAMADA"}], "fecha_creacion": "2025-04-15", "ultima_actividad": "2025-06-13"},
    {"id": "L006", "nombre": "LUIS CAMILO DIAZ", "empresa": "CONSORCIO ING SANTA ELENA PM - 2025", "email": "ingluisdiazp@gmail.com", "telefono": "3012865158", "origen": "WHATSAPP", "estado": "Contactado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "MEDELLIN", "score": 80, "valor": null, "asesor": "DIANA", "comentarios": [{"fecha": "2025-06-17", "texto": "Se passa oferta solicitada por el cliente para proyecto en el municipio de Pacora", "tipo": "EMAIL"}], "fecha_creacion": "2025-06-10", "ultima_actividad": "2025-06-17"},
    {"id": "L007", "nombre": "ALEX MARTINEZ", "empresa": "Persona Natural", "email": "alexandermartinez780@gmail.com", "telefono": "3207690055", "origen": "FACEBOOK", "estado": "Enviado a distribuidor", "intereses": ["TUBERIA", "ACCESORIOS/MEDIDORES"], "tipo_cliente": "NUEVO", "ciudad": "CARTAGENA", "score": 85, "valor": 2000000, "asesor": "PAOLA", "comentarios": [{"fecha": "2025-06-26", "texto": "Se envia cotizacion No. 20250626 para proyecto RCI en Seren del Mar", "tipo": "EMAIL"}, {"fecha": "2025-07-15", "texto": "Se realiza seguimiento de oferta, se encuentra en revision", "tipo": "LLAMADA"}, {"fecha": "2025-09-24", "texto": "Compraron oferta por medio de COSERINCO cliente me contacto directo", "tipo": "LLAMADA"}], "fecha_creacion": "2025-06-20", "ultima_actividad": "2025-09-24"},
    {"id": "L008", "nombre": "SANTIAGO TRIANA", "empresa": "FIRELINE", "email": "ventas@fireline.com.co", "telefono": "3177459833", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "CARTAGENA", "score": 82, "valor": 44000000, "asesor": "PAOLA", "comentarios": [], "fecha_creacion": "2025-08-01", "ultima_actividad": "2025-08-01"},
    {"id": "L009", "nombre": "ANA CASTELLON", "empresa": "HyM Contratistas Sas", "email": "hymcontratistas@hotmail.com", "telefono": "3148855627", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "TURBACO", "score": 79, "valor": 12000000, "asesor": "PAOLA", "comentarios": [], "fecha_creacion": "2025-08-05", "ultima_actividad": "2025-08-05"},
    {"id": "L010", "nombre": "PAOLA RUA JIMENEZ", "empresa": "COL PROYECTOS", "email": "compras.colproyectos@gmail.com", "telefono": "3163433230", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "SABANA LARGA", "score": 77, "valor": 48000000, "asesor": "PAOLA", "comentarios": [], "fecha_creacion": "2025-08-10", "ultima_actividad": "2025-08-10"},
    {"id": "L011", "nombre": "DARLYS", "empresa": "GEOCOR", "email": "GEOCORSASESP@GMAIL.COM", "telefono": "3007330843", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "CORDOBA", "score": 75, "valor": null, "asesor": "PAOLA", "comentarios": [], "fecha_creacion": "2025-08-12", "ultima_actividad": "2025-08-12"},
    {"id": "L012", "nombre": "ARIANNA D ANGELO", "empresa": "Promotora Imola Park S.A.S", "email": "Comprasimola@pradoverde.co", "telefono": "3105695671", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "CARTAGENA", "score": 83, "valor": 92000000, "asesor": "PAOLA", "comentarios": [], "fecha_creacion": "2025-08-15", "ultima_actividad": "2025-08-15"},
    {"id": "L013", "nombre": "CAMILO CUADRADO", "empresa": "CIVILE HIDRAULICOS", "email": "civileshidraulicosavp@gmail.com", "telefono": "3182668393", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "MAGANGUE", "score": 81, "valor": 111000000, "asesor": "PAOLA", "comentarios": [], "fecha_creacion": "2025-08-18", "ultima_actividad": "2025-08-18"},
    {"id": "L014", "nombre": "MARITZA", "empresa": "INGEOMEGA", "email": "mceballos@ingeomegasas.com", "telefono": "3183941635", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "ITAGUI", "score": 86, "valor": 397835723, "asesor": "DIANA", "comentarios": [], "fecha_creacion": "2025-08-20", "ultima_actividad": "2025-08-20"},
    {"id": "L015", "nombre": "GIOVANNI GARCIA", "empresa": "PROYECTOS MULTIPLES", "email": "ggarcia@pmsa.com.co", "telefono": "3014418567", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "BARRANQUILLA", "score": 78, "valor": 14682000, "asesor": "PAOLA", "comentarios": [], "fecha_creacion": "2025-08-22", "ultima_actividad": "2025-08-22"},
    {"id": "L016", "nombre": "ANGEL VERGARA", "empresa": "GAMO INGENIEROS SAS", "email": "anverco1@gmail.com", "telefono": "3143002311", "origen": "WHATSAPP", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "LA CEJA", "score": 72, "valor": null, "asesor": "DIANA", "comentarios": [], "fecha_creacion": "2025-08-25", "ultima_actividad": "2025-08-25"},
    {"id": "L017", "nombre": "ALEXIS", "empresa": "CFG PROYECTOS Y SERVICIOS SAS", "email": "infocfgproyectos@gmail.com", "telefono": "3202853308", "origen": "INSTAGRAM", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "BUCARAMANGA", "score": 70, "valor": 44797960, "asesor": "GONZALO", "comentarios": [], "fecha_creacion": "2025-08-28", "ultima_actividad": "2025-08-28"},
    {"id": "L018", "nombre": "LINA SALAMANCA", "empresa": "UNION TEMPORAL BALSA 3", "email": "utlabalsalll@gmail.com", "telefono": "3113686899", "origen": "INSTAGRAM", "estado": "Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "ACTIVO", "ciudad": "TOCANCIPA", "score": 68, "valor": 187975200, "asesor": "ALVARO", "comentarios": [], "fecha_creacion": "2025-08-30", "ultima_actividad": "2025-08-30"},
    {"id": "L019", "nombre": "ANDRES AREVALO", "empresa": "RB DE COLOMBIA SA", "email": "notificaciones@rbdecolombia.com", "telefono": "3107587157", "origen": "INSTAGRAM", "estado": "No Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "QUIBDO", "score": 25, "valor": null, "asesor": "DIANA", "comentarios": [{"fecha": "2025-02-27", "texto": "LEAD CERRADO - Realizaron la compra a traves de SYE", "tipo": "LLAMADA"}], "fecha_creacion": "2025-02-15", "ultima_actividad": "2025-02-27"},
    {"id": "L020", "nombre": "CLAUDIA LOPEZ", "empresa": "EMSERPRE", "email": "emserpre@gmail.com", "telefono": "3217752052", "origen": "INSTAGRAM", "estado": "No Interesado", "intereses": ["TUBERIA", "ACCESORIOS/MEDIDORES"], "tipo_cliente": "NUEVO", "ciudad": "PEREIRA", "score": 28, "valor": null, "asesor": "ALEXIS", "comentarios": [{"fecha": "2025-04-28", "texto": "El proyecto aun no es viable por temas de costos", "tipo": "LLAMADA"}], "fecha_creacion": "2025-04-20", "ultima_actividad": "2025-04-28"},
    {"id": "L021", "nombre": "ANYELA CORTES", "empresa": "FESAT", "email": "asistentefesatsas@gmail.com", "telefono": "3173659872", "origen": "WHATSAPP", "estado": "No Interesado", "intereses": ["TUBERIA", "ACCESORIOS/MEDIDORES"], "tipo_cliente": "NUEVO", "ciudad": "CALI", "score": 22, "valor": null, "asesor": "ALEXIS", "comentarios": [{"fecha": "2025-04-30", "texto": "NO APLICAMOS portuberia AC Clase 10", "tipo": "LLAMADA"}], "fecha_creacion": "2025-04-25", "ultima_actividad": "2025-04-30"},
    {"id": "L022", "nombre": "MARIA FERNANDA CARDONA", "empresa": "INGENOVAC", "email": "gerencia@ingenovac.com", "telefono": "3189696592", "origen": "WHATSAPP", "estado": "No Interesado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "DOSQUEBRADAS", "score": 20, "valor": null, "asesor": "ALEXIS", "comentarios": [{"fecha": "2025-05-05", "texto": "por tema de precios decide comprarsela a S&E", "tipo": "LLAMADA"}], "fecha_creacion": "2025-04-28", "ultima_actividad": "2025-05-05"},
    {"id": "L023", "nombre": "LAURA CASTAÑEDA", "empresa": "EL POBLADO SAS", "email": "lauracastaneda@elpobladosa.com", "telefono": "3014109361", "origen": "WHATSAPP", "estado": "Contactado", "intereses": ["TUBERIA"], "tipo_cliente": "NUEVO", "ciudad": "BARRANQUILLA", "score": 76, "valor": null, "asesor": "PAOLA", "comentarios": [], "fecha_creacion": "2025-09-01", "ultima_actividad": "2025-09-01"}
  ],
  "oportunidades": [
    {"id": "OPP-001", "nombre": "Suministro tubería RB Colombia", "empresa": "RB DE COLOMBIA SA", "lead_id": "L019", "contacto": "ANDRES AREVALO", "estado": "Cerrada Ganada", "valor": 26636772, "fecha_cierre": "2025-02-27", "asesor": "DIANA", "origen": "INSTAGRAM", "productos": [{"nombre": "TUBERIA HDPE 500mm PN10", "cantidad": 42, "precio_unitario": 634209, "subtotal": 26636772}]},
    {"id": "OPP-002", "nombre": "Cotización proyecto CARTAGENA", "empresa": "Persona Natural", "lead_id": "L007", "contacto": "ALEX MARTINEZ", "estado": "Cerrada Ganada", "valor": 2000000, "fecha_cierre": "2025-04-25", "asesor": "PAOLA", "origen": "FACEBOOK", "productos": [{"nombre": "ACCESORIOS PEAD", "cantidad": 1, "precio_unitario": 2000000, "subtotal": 2000000}]},
    {"id": "OPP-003", "nombre": "Licitación ADOS Apartadó", "empresa": "ADOS INGENIERIA", "lead_id": "L004", "contacto": "MADELIN NAMIAS", "estado": "Cerrada Ganada", "valor": 98901299, "fecha_cierre": "2025-06-16", "asesor": "DIANA", "origen": "INSTAGRAM", "productos": [{"nombre": "TUBERIA HDPE 400mm PN8", "cantidad": 500, "precio_unitario": 89000, "subtotal": 44500000}, {"nombre": "ACCESORIOS HIDRAULICOS", "cantidad": 1, "precio_unitario": 54401299, "subtotal": 54401299}]},
    {"id": "OPP-004", "nombre": "Proyecto Fireline Cartagena", "empresa": "FIRELINE", "lead_id": "L008", "contacto": "SANTIAGO TRIANA", "estado": "Propuesta", "valor": 44000000, "fecha_cierre": "2025-09-30", "asesor": "PAOLA", "origen": "WHATSAPP", "productos": [{"nombre": "TUBERIA HDPE 200mm PN12", "cantidad": 300, "precio_unitario": 146667, "subtotal": 44000000}]},
    {"id": "OPP-005", "nombre": "Sistema alcantarillado Itagui", "empresa": "INGEOMEGA", "lead_id": "L014", "contacto": "MARITZA", "estado": "Negociacion", "valor": 397835723, "fecha_cierre": "2025-10-15", "asesor": "DIANA", "origen": "WHATSAPP", "productos": [{"nombre": "TUBERIA HDPE 600mm PN6", "cantidad": 1200, "precio_unitario": 331530, "subtotal": 397835723}]},
    {"id": "OPP-006", "nombre": "Urbanizacion Imola Park", "empresa": "Promotora Imola Park S.A.S", "lead_id": "L012", "contacto": "ARIANNA D ANGELO", "estado": "Calificacion", "valor": 92000000, "fecha_cierre": "2025-11-30", "asesor": "PAOLA", "origen": "WHATSAPP", "productos": []},
    {"id": "OPP-007", "nombre": "Obra civil Magangue", "empresa": "CIVILE HIDRAULICOS", "lead_id": "L013", "contacto": "CAMILO CUADRADO", "estado": "Propuesta", "valor": 111000000, "fecha_cierre": "2025-10-30", "asesor": "PAOLA", "origen": "WHATSAPP", "productos": [{"nombre": "TUBERIA HDPE 800mm PN6", "cantidad": 500, "precio_unitario": 222000, "subtotal": 111000000}]},
    {"id": "OPP-008", "nombre": "Tuberia Union Temporal Balsa 3", "empresa": "UNION TEMPORAL BALSA 3", "lead_id": "L018", "contacto": "LINA SALAMANCA", "estado": "Negociacion", "valor": 187975200, "fecha_cierre": "2025-12-15", "asesor": "ALVARO", "origen": "INSTAGRAM", "productos": [{"nombre": "TUBERIA HDPE 1000mm PN4", "cantidad": 800, "precio_unitario": 234969, "subtotal": 187975200}]},
    {"id": "OPP-009", "nombre": "HyM Contratistas Turbaco", "empresa": "HyM Contratistas Sas", "lead_id": "L009", "contacto": "ANA CASTELLON", "estado": "Prospeccion", "valor": 12000000, "fecha_cierre": "2025-09-30", "asesor": "PAOLA", "origen": "WHATSAPP", "productos": []},
    {"id": "OPP-010", "nombre": "Col proyectos Sabana Larga", "empresa": "COL PROYECTOS", "lead_id": "L010", "contacto": "PAOLA RUA JIMENEZ", "estado": "Calificacion", "valor": 48000000, "fecha_cierre": "2025-11-15", "asesor": "PAOLA", "origen": "WHATSAPP", "productos": []},
    {"id": "OPP-011", "nombre": "CFG Proyectos Bucaramanga", "empresa": "CFG PROYECTOS Y SERVICIOS SAS", "lead_id": "L017", "contacto": "ALEXIS", "estado": "Prospeccion", "valor": 44797960, "fecha_cierre": "2025-10-30", "asesor": "GONZALO", "origen": "INSTAGRAM", "productos": []},
    {"id": "OPP-012", "nombre": "Proyectos Multiples Barranquilla", "empresa": "PROYECTOS MULTIPLES", "lead_id": "L015", "contacto": "GIOVANNI GARCIA", "estado": "Propuesta", "valor": 14682000, "fecha_cierre": "2025-09-25", "asesor": "PAOLA", "origen": "WHATSAPP", "productos": []}
  ],
  "empresas": [
    {"id": "EMP-001", "nombre": "UNION TEMPORAL SAN MARCOS", "nit": "901234567-1", "ciudad": "SUCRE", "departamento": "SUCRE", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-002", "nombre": "RB DE COLOMBIA SA", "nit": "800123456-7", "ciudad": "QUIBDO", "departamento": "CHOCO", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-003", "nombre": "EMSERPRE", "nit": "891234567-8", "ciudad": "PEREIRA", "departamento": "RISARALDA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-004", "nombre": "Persona Natural", "nit": "12345678", "ciudad": "CARTAGENA", "departamento": "BOLIVAR", "nuevo": true, "sector": "CONSTRUCCION", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-005", "nombre": "ADOS INGENIERIA", "nit": "901234568-2", "ciudad": "APARTADO", "departamento": "ANTIOQUIA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-006", "nombre": "CFG PROYECTOS Y SERVICIOS SAS", "nit": "900123456-9", "ciudad": "BUCARAMANGA", "departamento": "SANTANDER", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-007", "nombre": "UNION TEMPORAL BALSA 3", "nit": "901234570-3", "ciudad": "TOCANCIPA", "departamento": "CUNDINAMARCA", "nuevo": false, "sector": "AGUA", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-008", "nombre": "FESAT", "nit": "805678912-4", "ciudad": "CALI", "departamento": "VALLE DEL CAUCA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-009", "nombre": "FIRELINE", "nit": "900987654-5", "ciudad": "CARTAGENA", "departamento": "BOLIVAR", "nuevo": true, "sector": "INDUSTRIA", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-010", "nombre": "INGENOVAC", "nit": "901234571-6", "ciudad": "DOSQUEBRADAS", "departamento": "RISARALDA", "nuevo": true, "sector": "INDUSTRIA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-011", "nombre": "HyM Contratistas Sas", "nit": "901234572-7", "ciudad": "TURBACO", "departamento": "BOLIVAR", "nuevo": true, "sector": "CONSTRUCCION", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-012", "nombre": "COL PROYECTOS", "nit": "900876543-8", "ciudad": "SABANA LARGA", "departamento": "CUNDINAMARCA", "nuevo": true, "sector": "CONSTRUCCION", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-013", "nombre": "GEOCOR", "nit": "901234573-9", "ciudad": "CORDOBA", "departamento": "CORDOBA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-014", "nombre": "Promotora Imola Park S.A.S", "nit": "901234574-1", "ciudad": "CARTAGENA", "departamento": "BOLIVAR", "nuevo": true, "sector": "CONSTRUCCION", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-015", "nombre": "CIVILE HIDRAULICOS", "nit": "901234575-2", "ciudad": "MAGANGUE", "departamento": "BOLIVAR", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-016", "nombre": "MONTAJES JM", "nit": "901234576-3", "ciudad": "LA DORADA", "departamento": "CALDAS", "nuevo": true, "sector": "INDUSTRIA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-017", "nombre": "INGEOMEGA", "nit": "890123457-4", "ciudad": "ITAGUI", "departamento": "ANTIOQUIA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-018", "nombre": "GRUPO CIVILEC", "nit": "901234577-5", "ciudad": "PACORA", "departamento": "ANTIOQUIA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-019", "nombre": "EL POBLADO SAS", "nit": "900654321-6", "ciudad": "BARRANQUILLA", "departamento": "ATLANTICO", "nuevo": true, "sector": "CONSTRUCCION", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-020", "nombre": "CMM", "nit": "901234578-7", "ciudad": "MEDELLIN", "departamento": "ANTIOQUIA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-021", "nombre": "CONSORCIO ING SANTA ELENA PM - 2025", "nit": "901234579-8", "ciudad": "MEDELLIN", "departamento": "ANTIOQUIA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 0},
    {"id": "EMP-022", "nombre": "PROYECTOS MULTIPLES", "nit": "900987123-9", "ciudad": "BARRANQUILLA", "departamento": "ATLANTICO", "nuevo": true, "sector": "CONSTRUCCION", "leads_count": 1, "opps_count": 1},
    {"id": "EMP-023", "nombre": "GAMO INGENIEROS SAS", "nit": "901234580-1", "ciudad": "LA CEJA", "departamento": "ANTIOQUIA", "nuevo": true, "sector": "AGUA", "leads_count": 1, "opps_count": 0}
  ],
  "productos": [
    {"id": "P001", "nombre": "TUBERIA HDPE 200mm PN12", "categoria": "TUBERIA", "precio_base": 146667},
    {"id": "P002", "nombre": "TUBERIA HDPE 400mm PN8", "categoria": "TUBERIA", "precio_base": 89000},
    {"id": "P003", "nombre": "TUBERIA HDPE 500mm PN10", "categoria": "TUBERIA", "precio_base": 634209},
    {"id": "P004", "nombre": "TUBERIA HDPE 600mm PN6", "categoria": "TUBERIA", "precio_base": 331530},
    {"id": "P005", "nombre": "TUBERIA HDPE 800mm PN6", "categoria": "TUBERIA", "precio_base": 222000},
    {"id": "P006", "nombre": "TUBERIA HDPE 1000mm PN4", "categoria": "TUBERIA", "precio_base": 234969},
    {"id": "P007", "nombre": "ACCESORIOS PEAD", "categoria": "ACCESORIOS", "precio_base": 2000000},
    {"id": "P008", "nombre": "ACCESORIOS HIDRAULICOS", "categoria": "ACCESORIOS", "precio_base": 54401299},
    {"id": "P009", "nombre": "MEDIDOR DE CAUDAL", "categoria": "MEDIDORES", "precio_base": 1500000},
    {"id": "P010", "nombre": "EQUIPO TERMOFUSION 200mm", "categoria": "EQUIPOS", "precio_base": 8500000}
  ],
  "actividades": [
    {"id": "ACT-001", "tipo": "LLAMADA", "lead_id": "L001", "fecha": "2025-02-15", "descripcion": "SE HACE OFERTACON ADS EL CLIENTE DEFINIRA LA COMPRA POR PRECIO", "asesor": "PAOLA", "notas": "El cliente indica que definir\u00e1 la compra seg\u00fan precio final.", "completada": true},
    {"id": "ACT-002", "tipo": "EMAIL", "lead_id": "L001", "fecha": "2025-04-24", "descripcion": "la compra se cambio a PVC por diferencia de 20% ante tuberia corrugada de PEAD", "asesor": "PAOLA", "notas": "El cliente decidi\u00f3 cambiar a PVC por diferencia de precio.", "completada": true},
    {"id": "ACT-003", "tipo": "VISITA", "lead_id": "L001", "fecha": "2025-05-06", "descripcion": "seguimiento", "asesor": "PAOLA", "notas": "Visita de seguimiento al proyecto.", "completada": true, "gps_lat": "8.8042", "gps_lng": "-75.6873", "gps_direccion": "Calle 29 #28-32, Sucre"},
    {"id": "ACT-004", "tipo": "EMAIL", "lead_id": "L002", "fecha": "2025-02-27", "descripcion": "Se le realiza oferta para el sector alcantarillado. cantidad ofertada, 42mts de 500 mm PN10", "asesor": "DIANA", "notas": "Oferta enviada para proyecto de alcantarillado.", "completada": true},
    {"id": "ACT-005", "tipo": "LLAMADA", "lead_id": "L002", "fecha": "2025-04-24", "descripcion": "Realizaron la compra a traves de SYE por temas de fabricacion minima", "asesor": "DIANA", "notas": "Compra realizada a trav\u00e9s de SYE por cantidad m\u00ednima de fabricaci\u00f3n.", "completada": true},
    {"id": "ACT-006", "tipo": "EMAIL", "lead_id": "L003", "fecha": "2025-04-23", "descripcion": "SE ENVIA 2 OFERTAS PARA ESPECIFICACION DE PRODUCTOS # 30396 - 30397", "asesor": "DIANA", "notas": "Ofertas enviadas seg\u00fan especificaci\u00f3n t\u00e9cnica.", "completada": true},
    {"id": "ACT-007", "tipo": "LLAMADA", "lead_id": "L003", "fecha": "2025-04-28", "descripcion": "El proyecto aun no es viable por temas de costos Vs pvc", "asesor": "DIANA", "notas": "Proyecto en standby por cuesti\u00f3n de costos vs PVC.", "completada": true},
    {"id": "ACT-008", "tipo": "LLAMADA", "lead_id": "L004", "fecha": "2025-04-25", "descripcion": "realizo compra a reinaldo navarro por 2.000.000", "asesor": "DIANA", "notas": "Compra concretada con valor de $2.000.000 COP.", "completada": true, "gps_lat": "7.8833", "gps_lng": "-76.6333", "gps_direccion": "Apartad\u00f3, Antioquia"},
    {"id": "ACT-009", "tipo": "LLAMADA", "lead_id": "L005", "fecha": "2025-04-19", "descripcion": "Seguimiento telefoncio, oferta de tuber\u00eda y accesorios pealpe", "asesor": "DIANA", "notas": "Oferta enviada con tuber\u00eda y accesorios PEALPE.", "completada": true},
    {"id": "ACT-010", "tipo": "EMAIL", "lead_id": "L005", "fecha": "2025-05-21", "descripcion": "oferta 30987, seguimiento", "asesor": "DIANA", "notas": "Seguimiento a oferta 30987.", "completada": true},
    {"id": "ACT-011", "tipo": "LLAMADA", "lead_id": "L005", "fecha": "2025-06-13", "descripcion": "seguimiento, fase de definicion", "asesor": "DIANA", "notas": "Cliente en fase de definici\u00f3n de presupuesto.", "completada": false},
    {"id": "ACT-012", "tipo": "EMAIL", "lead_id": "L006", "fecha": "2025-06-17", "descripcion": "Se passa oferta solicitada por el cliente para proyecto en el municipio de Pacora", "asesor": "DIANA", "notas": "Oferta remitida para proyecto de acueducto en Pacora.", "completada": true},
    {"id": "ACT-013", "tipo": "EMAIL", "lead_id": "L007", "fecha": "2025-06-26", "descripcion": "Se envia cotizacion No. 20250626 para proyecto RCI en Seren del Mar", "asesor": "PAOLA", "notas": "Cotizaci\u00f3n 20250626 para proyecto RCI en Seren del Mar.", "completada": true},
    {"id": "ACT-014", "tipo": "LLAMADA", "lead_id": "L007", "fecha": "2025-07-15", "descripcion": "Se realiza seguimiento de oferta, se encuentra en revision", "asesor": "PAOLA", "notas": "Oferta en revisi\u00f3n por el cliente.", "completada": true},
    {"id": "ACT-015", "tipo": "LLAMADA", "lead_id": "L007", "fecha": "2025-09-24", "descripcion": "Compraron oferta por medio de COSERINCO cliente me contacto directo", "asesor": "PAOLA", "notas": "Cliente compr\u00f3 a trav\u00e9s de COSERINCO. Contacto directo recibido.", "completada": true, "gps_lat": "10.3932", "gps_lng": "-75.4792", "gps_direccion": "Cartagena, Bol\u00edar"},
    {"id": "ACT-016", "tipo": "EMAIL", "lead_id": "L019", "fecha": "2025-02-27", "descripcion": "LEAD CERRADO - Realizaron la compra a traves de SYE", "asesor": "DIANA", "notas": "Lead cerrado. Compra realizada a trav\u00e9s de SYE.", "completada": true},
    {"id": "ACT-017", "tipo": "LLAMADA", "lead_id": "L020", "fecha": "2025-04-28", "descripcion": "El proyecto aun no es viable por temas de costos", "asesor": "ALEXIS", "notas": "Proyecto en evaluaci\u00f3n por costos elevados.", "completada": true},
    {"id": "ACT-018", "tipo": "LLAMADA", "lead_id": "L021", "fecha": "2025-04-30", "descripcion": "NO APLICAMOS portuberia AC Clase 10", "asesor": "ALEXIS", "notas": "Producto no aplicable para tuber\u00eda AC Clase 10.", "completada": true},
    {"id": "ACT-019", "tipo": "LLAMADA", "lead_id": "L022", "fecha": "2025-05-05", "descripcion": "por tema de precios decide comprarsela a S&E", "asesor": "ALEXIS", "notas": "Cliente decidi\u00f3 comprar a competencia S&E por precio.", "completada": true}
  ],
  "metricas": {
    "total_leads": 23,
    "total_oportunidades": 12,
    "total_oportunidades_cerradas": 3,
    "total_valor_pipeline": 697000000,
    "tasa_conversion": 0.13,
    "leads_por_origen": [{"origen": "WHATSAPP", "count": 15}, {"origen": "INSTAGRAM", "count": 7}, {"origen": "FACEBOOK", "count": 1}],
    "leads_por_estado": [{"estado": "Nuevo", "count": 3}, {"estado": "Contactado", "count": 3}, {"estado": "Interesado", "count": 12}, {"estado": "Enviado a distribuidor", "count": 2}, {"estado": "No Interesado", "count": 6}],
    "leads_por_asesor": [{"asesor": "PAOLA", "count": 9}, {"asesor": "DIANA", "count": 7}, {"asesor": "ALEXIS", "count": 4}, {"asesor": "ALVARO", "count": 1}, {"asesor": "GONZALO", "count": 1}],
    "oportunidades_por_estado": [{"estado": "Prospeccion", "count": 2}, {"estado": "Calificacion", "count": 2}, {"estado": "Propuesta", "count": 3}, {"estado": "Negociacion", "count": 2}, {"estado": "Cerrada Ganada", "count": 3}],
    "ventas_por_asesor": [{"asesor": "PAOLA", "ventas": 2000000, "opps": 1}, {"asesor": "DIANA", "ventas": 125538071, "opps": 2}, {"asesor": "ALVARO", "ventas": 0, "opps": 1}]
  }
};

window.CRMData = {
  data: null,
  loaded: false,
  seed: CRM_SEED_DATA,
  _idCounters: { lead: 23, opp: 12, act: 19, emp: 23 },

  async load() {
    if (this.loaded) return this.data;
    try {
      const res = await fetch('data/crm-data.json');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      this.data = await res.json();
      this.loaded = true;
      this._syncIdCounters();
    } catch (e) {
      const stored = localStorage.getItem('crm_data');
      if (stored) {
        try {
          this.data = JSON.parse(stored);
          this.loaded = true;
          this._syncIdCounters();
        } catch {
          this._useSeed();
        }
      } else {
        this._useSeed();
      }
    }
    return this.data;
  },

  _useSeed() {
    this.data = JSON.parse(JSON.stringify(CRM_SEED_DATA));
    this.loaded = true;
    this._syncIdCounters();
    this.save();
  },

  _syncIdCounters() {
    if (!this.data) return;
    const maxLead = this.data.leads.reduce((m, l) => { const n = parseInt(l.id.replace('L','')); return n > m ? n : m; }, 0);
    const maxOpp = this.data.oportunidades.reduce((m, o) => { const n = parseInt(o.id.replace('OPP-','')); return n > m ? n : m; }, 0);
    const maxAct = this.data.actividades.reduce((m, a) => { const n = parseInt(a.id.replace('ACT-','')); return n > m ? n : m; }, 0);
    const maxEmp = this.data.empresas.reduce((m, e) => { const n = parseInt(e.id.replace('EMP-','')); return n > m ? n : m; }, 0);
    this._idCounters = { lead: maxLead, opp: maxOpp, act: maxAct, emp: maxEmp };
  },

  save() {
    if (!this.data) return;
    try {
      localStorage.setItem('crm_data', JSON.stringify(this.data));
    } catch (e) {
      console.warn('CRMData save failed:', e);
    }
  },

  _nextId(type) {
    this._idCounters[type] = (this._idCounters[type] || 0) + 1;
    const prefixes = { lead: 'L', opp: 'OPP-', act: 'ACT-', emp: 'EMP-' };
    return prefixes[type] + String(this._idCounters[type]).padStart(3, '0');
  },

  reset() {
    localStorage.removeItem('crm_data');
    this.data = null;
    this.loaded = false;
    this._idCounters = { lead: 23, opp: 12, act: 19, emp: 23 };
    return this.load();
  },

  // ─── LEAD CRUD ────────────────────────────────────────
  getLeads(filters = {}) {
    if (!this.data) return [];
    let leads = [...this.data.leads];
    if (filters.asesor) leads = leads.filter(l => l.asesor === filters.asesor);
    if (filters.estado) leads = leads.filter(l => l.estado === filters.estado);
    if (filters.origen) leads = leads.filter(l => l.origen === filters.origen);
    return leads;
  },

  getLeadById(id) {
    return this.data?.leads.find(l => l.id === id) || null;
  },

  addLead(fields = {}) {
    if (!this.data) return null;
    const id = this._nextId('lead');
    const today = new Date().toISOString().split('T')[0];
    const lead = {
      id, nombre: fields.nombre || '', empresa: fields.empresa || '', email: fields.email || '',
      telefono: fields.telefono || '', origen: fields.origen || 'WHATSAPP',
      estado: fields.estado || 'Nuevo', intereses: fields.intereses || [], tipo_cliente: fields.tipo_cliente || 'NUEVO',
      ciudad: fields.ciudad || '', score: 0, valor: null, asesor: fields.asesor || 'PAOLA',
      comentarios: [], fecha_creacion: today, ultima_actividad: today
    };
    this.data.leads.unshift(lead);
    this.save();
    return lead;
  },

  updateLead(id, changes = {}) {
    const lead = this.getLeadById(id);
    if (!lead) return null;
    Object.assign(lead, changes);
    this.save();
    return lead;
  },

  deleteLead(id) {
    if (!this.data) return false;
    const idx = this.data.leads.findIndex(l => l.id === id);
    if (idx === -1) return false;
    this.data.leads.splice(idx, 1);
    this.save();
    return true;
  },

  addComentario(leadId, texto, tipo = 'LLAMADA') {
    const lead = this.getLeadById(leadId);
    if (!lead) return null;
    if (!lead.comentarios) lead.comentarios = [];
    const com = { fecha: new Date().toISOString().split('T')[0], texto, tipo };
    lead.comentarios.push(com);
    lead.ultima_actividad = com.fecha;
    this.save();
    return com;
  },

  // ─── OPORTUNIDAD CRUD ──────────────────────────────────
  getOportunidades(filters = {}) {
    if (!this.data) return [];
    let opps = [...this.data.oportunidades];
    if (filters.estado) opps = opps.filter(o => o.estado === filters.estado);
    if (filters.asesor) opps = opps.filter(o => o.asesor === filters.asesor);
    return opps;
  },

  getOportunidadById(id) {
    return this.data?.oportunidades.find(o => o.id === id) || null;
  },

  addOportunidad(fields = {}) {
    if (!this.data) return null;
    const id = this._nextId('opp');
    const today = new Date().toISOString().split('T')[0];
    const opp = {
      id, nombre: fields.nombre || '', empresa: fields.empresa || '', lead_id: fields.lead_id || null,
      contacto: fields.contacto || '', estado: fields.estado || 'Prospeccion',
      valor: fields.valor || 0, fecha_cierre: fields.fecha_cierre || '', asesor: fields.asesor || 'PAOLA',
      origen: fields.origen || 'WHATSAPP', productos: []
    };
    this.data.oportunidades.push(opp);
    this.save();
    return opp;
  },

  updateOportunidad(id, changes = {}) {
    const opp = this.getOportunidadById(id);
    if (!opp) return null;
    Object.assign(opp, changes);
    this.save();
    return opp;
  },

  deleteOportunidad(id) {
    if (!this.data) return false;
    const idx = this.data.oportunidades.findIndex(o => o.id === id);
    if (idx === -1) return false;
    this.data.oportunidades.splice(idx, 1);
    this.save();
    return true;
  },

  addProductoOportunidad(oppId, producto) {
    const opp = this.getOportunidadById(oppId);
    if (!opp) return null;
    if (!opp.productos) opp.productos = [];
    producto.subtotal = producto.cantidad * producto.precio_unitario;
    opp.productos.push(producto);
    const total = opp.productos.reduce((s, p) => s + (p.subtotal || 0), 0);
    opp.valor = total;
    this.save();
    return producto;
  },

  // ─── ACTIVIDAD CRUD ────────────────────────────────────
  getActividades(filters = {}) {
    if (!this.data) return [];
    let acts = [...this.data.actividades];
    if (filters.asesor) acts = acts.filter(a => a.asesor === filters.asesor);
    if (filters.lead_id) acts = acts.filter(a => a.lead_id === filters.lead_id);
    if (filters.tipo) acts = acts.filter(a => a.tipo === filters.tipo);
    return acts.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  },

  getActividadById(id) {
    return this.data?.actividades.find(a => a.id === id) || null;
  },

  addActividad(fields = {}) {
    if (!this.data) return null;
    const id = this._nextId('act');
    const act = {
      id, tipo: fields.tipo || 'LLAMADA', lead_id: fields.lead_id || null,
      oportunidad_id: fields.oportunidad_id || null, fecha: fields.fecha || new Date().toISOString().split('T')[0],
      descripcion: fields.descripcion || '', notas: fields.notas || '',
      gps_lat: fields.gps_lat || null, gps_lng: fields.gps_lng || null,
      gps_direccion: fields.gps_direccion || null, completada: fields.completada || false,
      asesor: fields.asesor || 'PAOLA'
    };
    this.data.actividades.push(act);
    this.save();
    return act;
  },

  updateActividad(id, changes = {}) {
    const act = this.getActividadById(id);
    if (!act) return null;
    Object.assign(act, changes);
    this.save();
    return act;
  },

  // ─── EMPRESA ───────────────────────────────────────────
  getEmpresas(filters = {}) {
    if (!this.data) return [];
    let emps = [...this.data.empresas];
    if (filters.ciudad) emps = emps.filter(e => e.ciudad === filters.ciudad);
    if (filters.departamento) emps = emps.filter(e => e.departamento === filters.departamento);
    return emps;
  },

  getEmpresaById(id) {
    return this.data?.empresas.find(e => e.id === id) || null;
  },

  // ─── HELPERS ───────────────────────────────────────────
  getUsuario(nombre) {
    return this.data?.usuarios.ejecutivos.find(u => u.nombre === nombre) || null;
  },

  getMetricas() {
    return this.data ? this.data.metricas : null;
  },

  getOrigenColor(origen) {
    const orig = this.data?.origenes.find(o => o.nombre === origen);
    return orig ? orig.color : '#6B7280';
  },

  formatCurrency(valor) {
    if (!valor && valor !== 0) return '$0';
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(valor);
  },

  formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
  },

  getDaysAgo(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'Hoy';
    if (diff === 1) return '1d';
    return `${diff}d`;
  },

  recalculateMetricas() {
    if (!this.data) return;
    const leads = this.data.leads;
    const opps = this.data.oportunidades;
    const acts = this.data.actividades;

    this.data.metricas = {
      total_leads: leads.length,
      total_oportunidades: opps.length,
      total_oportunidades_cerradas: opps.filter(o => o.estado === 'Cerrada Ganada' || o.estado === 'Cerrada Perdida').length,
      total_valor_pipeline: opps.filter(o => o.estado !== 'Cerrada Ganada' && o.estado !== 'Cerrada Perdida').reduce((s, o) => s + (o.valor || 0), 0),
      tasa_conversion: opps.length > 0 ? opps.filter(o => o.estado === 'Cerrada Ganada').length / opps.length : 0,
      leads_por_origen: ['WHATSAPP', 'INSTAGRAM', 'FACEBOOK'].map(orig => ({ origen, count: leads.filter(l => l.origen === orig).length })),
      leads_por_estado: ['Nuevo', 'Contactado', 'Interesado', 'Enviado a distribuidor', 'No Interesado'].map(est => ({ estado: est, count: leads.filter(l => l.estado === est).length })),
      leads_por_asesor: this.data.usuarios.ejecutivos.map(u => ({ asesor: u.nombre, count: leads.filter(l => l.asesor === u.nombre).length })),
      oportunidades_por_estado: ['Prospeccion', 'Calificacion', 'Propuesta', 'Negociacion', 'Cerrada Ganada', 'Cerrada Perdida'].map(est => ({ estado: est, count: opps.filter(o => o.estado === est).length })),
      ventas_por_asesor: this.data.usuarios.ejecutivos.map(u => {
        const userOpps = opps.filter(o => o.asesor === u.nombre && o.estado === 'Cerrada Ganada');
        return { asesor: u.nombre, ventas: userOpps.reduce((s, o) => s + (o.valor || 0), 0), opps: userOpps.length };
      })
    };
    this.save();
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await CRMData.load();
  if (typeof window.onCRMDataLoaded === 'function') {
    window.onCRMDataLoaded(CRMData);
  }
});