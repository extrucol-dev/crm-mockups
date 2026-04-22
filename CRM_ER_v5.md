# CRM Extrucol - Modelo Entidad Relación

## Notas
- Los campos de colores, estilos CSS y presentationes visuales son tema de frontend, no de la base de datos
- Este documento actualiza el modelo previo con los campos y entidades descubiertas en el CSV fuente

---

## Entidades Principales

### CRM_USUARIO
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_usuario | Long PK | |
| nombre | String | Nombre completo |
| email | String | Email corporativo |
| password | String | Hash de contrasena |
| rol | String | 'director', 'coordinador', 'ejecutivo' |
| activo | Boolean | |
| fecha_creacion | LocalDateTime | |
| id_departamento | Long FK | |

### CRM_DEPARTAMENTO
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_departamento | Long PK | |
| nombre | String | ej: 'Santander', 'Antioquia' |
| codigo | String | |

---

### CRM_LEAD
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_lead | Long PK | |
| titulo | String | Resumen breve del lead |
| nombre | String | Nombre del contacto |
| empresa | String | Nombre de la empresa |
| email | String | Email del contacto |
| telefono | String | Telefono del contacto |
| descripcion | String | |
| id_estado_lead | Long FK | Estado actual |
| id_origen_lead | Long FK | Instagram, Facebook, WhatsApp |
| id_empresa | Long FK | Empresa asociada (nullable) |
| id_contacto | Long FK | Contacto asociado (nullable) |
| id_usuario | Long FK | Ejecutivo asignado |
| id_oportunidad_generada | Long FK | Se llena al convertir a oportunidad |
| score | Integer | Puntaje de interes (0-100) |
| valor | BigDecimal | Valor estimado del proyecto (COP) |
| tipo_cliente | String | 'NUEVO' o 'ACTIVO' |
| ciudad | String | Ciudad/ubicacion (denormalizado para facilidad) |
| fecha_creacion | LocalDateTime | |
| fecha_actualizacion | LocalDateTime | Ultima interaccion |
| motivo_descalificacion | String |nullable |

**Llaves de seguimiento temporal (para alertas):**
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| fecha_ultima_actividad | LocalDateTime | Para detectar leads estancados |

---

### CRM_COMENTARIO_LEAD (NUEVO)
Historial de seguimiento/interacciones con el lead
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_comentario | Long PK | |
| id_lead | Long FK | |
| fecha | LocalDateTime | |
| tipo | String | 'LLAMADA', 'EMAIL', 'VISITA', 'REUNION' |
| texto | String | Descripcion de la actividad |
| id_usuario | Long FK | Ejecutivo que registro |

**Relacion:** Un lead puede tener muchos comentarios (historico de seguimiento)

---

### CRM_ESTADO_LEAD
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_estado_lead | Long PK | |
| nombre | String | 'Nuevo', 'Contactado', 'Interesado', 'No Interesado', 'Enviado a distribuidor' |
| tipo | String | 'ABIERTO', 'CALIFICADO', 'DESCALIFICADO' |
| orden | Integer | Para secuencias del kanban |

---

### CRM_ORIGEN_LEAD
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_origen_lead | Long PK | |
| nombre | String UK | 'WHATSAPP', 'INSTAGRAM', 'FACEBOOK', 'Pagina Web', 'Referido', 'Llamada' |
| descripcion | String | nullable |
| activo | Boolean | |

---

### CRM_INTERES
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_interes | Long PK | |
| nombre | String UK | 'TUBERIA', 'TUBERIA HDPE', 'ACCESORIOS/MEDIDORES', 'EQUIPOS', 'TRASLADO A DISTRIBUIDOR' |
| slug | String | Para URLs/filtros |
| descripcion | String | nullable |
| activo | Boolean | |

---

### CRM_LEAD_INTERES
Relacion muchos a muchos entre leads e intereses
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_lead_interes | Long PK | |
| id_lead | Long FK | |
| id_interes | Long FK | |
| fecha_registro | LocalDateTime | |

---

### CRM_HISTORIAL_ESTADO_LEAD
Control de cambios de estado del lead
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_historial_lead | Long PK | |
| id_lead | Long FK | |
| id_estado_anterior | Long FK | nullable |
| id_estado_nuevo | Long FK | |
| fecha_cambio | LocalDateTime | |
| id_usuario | Long FK | Quien hizo el cambio |

---

### CRM_OPORTUNIDAD
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_oportunidad | Long PK | |
| nombre | String | Titulo de la oportunidad |
| descripcion | String | |
| id_tipo_oportunidad | Long FK | 'Licitacion publica', 'Suministro directo', etc |
| id_estado_oportunidad | Long FK | Prospeccion, Calificacion, Propuesta, Negociacion, Cerrada Ganada, Cerrada Perdida |
| valor | BigDecimal | Valor estimado (COP) |
| id_sector | Long FK | 'AGUA', 'GAS', 'AGRO', 'CONSTRUCCION', 'INDUSTRIA' |
| fecha_cierre_estimada | LocalDate | |
| fecha_cierre_real | LocalDate | nullable - se llena al cerrar |
| id_empresa | Long FK | |
| id_usuario | Long FK | Ejecutivo asignado |
| id_lead_origen | Long FK | nullable - lead que genero la oportunidad |
| id_motivo_cierre | Long FK | nullable |
| descripcion_cierre | String | nullable |
| probabilidad | Integer | Porcentaje estimado (0-100) - para forecasting |
| fecha_creacion | LocalDateTime | |
| fecha_actualizacion | LocalDateTime | |

---

### CRM_ESTADO_OPORTUNIDAD
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_estado | Long PK | |
| nombre | String UK | 'Prospeccion', 'Calificacion', 'Propuesta', 'Negociacion', 'Cerrada Ganada', 'Cerrada Perdida' |
| tipo | String | 'ABIERTO', 'GANADO', 'PERDIDO' |
| orden | Integer | |

---

### CRM_SECTOR
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_sector | Long PK | |
| nombre | String UK | 'AGUA', 'GAS', 'AGRO', 'CONSTRUCCION', 'INDUSTRIA' |
| codigo | String | |

---

### CRM_MOTIVO_CIERRE
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_motivo_cierre | Long PK | |
| nombre | String UK | |
| tipo | String | 'GANADO', 'PERDIDO' |

---

### CRM_PRODUCTO
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_producto | Long PK | |
| nombre | String | |
| descripcion | String | |
| categoria | String | 'TUBERIA', 'ACCESORIOS', 'MEDIDORES', 'EQUIPOS' |
| precio_base | BigDecimal | COP |
| activo | Boolean | |

---

### CRM_OPORTUNIDAD_PRODUCTO
Items de producto en una oportunidad
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_oportunidad_producto | Long PK | |
| id_oportunidad | Long FK | |
| id_producto | Long FK | |
| cantidad | Integer | |
| precio_unitario | BigDecimal | COP |
| subtotal | BigDecimal | COP |
| fecha_agregado | LocalDateTime | |

---

### CRM_ACTIVIDAD
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_actividad | Long PK | |
| tipo | String | 'LLAMADA', 'EMAIL', 'VISITA', 'REUNION' |
| asunto | String | |
| descripcion | String | |
| resultado | String | nullable |
| virtual | Boolean | Si fue online o presencial |
| fecha_actividad | LocalDateTime | |
| fecha_creacion | LocalDateTime | |
| id_lead | Long FK | nullable |
| id_oportunidad | Long FK | nullable |
| id_usuario | Long FK | |

---

### CRM_UBICACION
Coordenadas GPS de actividades (visitas)
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_ubicacion | Long PK | |
| latitud | BigDecimal | |
| longitud | BigDecimal | |
| direccion | String | nullable |
| id_actividad | Long FK | |

---

### CRM_PROYECTO
Generado automaticamente al cerrar oportunidad como GANADA
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_proyecto | Long PK | |
| nombre | String | |
| descripcion | String | |
| estado | String | 'Planificacion', 'En ejecucion', 'Entregado', 'Cancelado' |
| porcentaje_progreso | Integer | 0-100 |
| valor | BigDecimal | COP |
| fecha_inicio | LocalDate | nullable |
| fecha_fin | LocalDate | nullable |
| fecha_creacion | LocalDateTime | |
| fecha_actualizacion | LocalDateTime | |
| id_oportunidad | Long FK | Oportunidad que genero el proyecto |
| id_usuario | Long FK | Responsable |

---

### CRM_HISTORIAL_ESTADO
Control de cambios de estado de oportunidad
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_historial | Long PK | |
| id_oportunidad | Long FK | |
| id_estado_anterior | Long FK | nullable |
| id_estado_nuevo | Long FK | |
| fecha_cambio | LocalDateTime | |
| id_usuario | Long FK | |
| comentario | String | nullable |

---

### CRM_EMPRESA
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_empresa | Long PK | |
| nombre | String | |
| no_documento | String | NIT |
| activo | Boolean | |
| nuevo | Boolean | false al cerrar primera oportunidad ganada |
| sector | String | 'AGUA', 'GAS', 'AGRO', 'CONSTRUCCION', 'INDUSTRIA' - denormalizado para facilidad |
| id_municipio | Long FK | |
| fecha_creacion | LocalDateTime | |

---

### CRM_CONTACTO
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_contacto | Long PK | |
| nombre | String | |
| apellido | String | |
| activo | Boolean | |
| id_empresa | Long FK | |
| fecha_creacion | LocalDateTime | |

---

### CRM_EMAIL
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_email | Long PK | |
| email | String UK | |
| id_contacto | Long FK | |

---

### CRM_TELEFONO
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_telefono | Long PK | |
| numero | String | |
| id_contacto | Long FK | |

---

### CRM_DOCUMENTO
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_documento | Long PK | |
| tipo | String | 'nit', 'cedula', 'extranjeria' |
| codigo | String | |

---

### CRM_MUNICIPIO
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_municipio | Long PK | |
| nombre | String | |
| codigo | String | |
| id_departamento | Long FK | |

---

### CRM_DEPARTAMENTO
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_departamento | Long PK | |
| nombre | String | |
| codigo | String | |
| id_pais | Long FK | |

---

### CRM_PAIS
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_pais | Long PK | |
| nombre | String | |
| codigo | String | |

---

### CRM_MODALIDAD
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_modalidad | Long PK | |
| nombre | String UK | 'Nacional', 'Internacional' |

---

### CRM_TIPO_OPORTUNIDAD
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_tipo_oportunidad | Long PK | |
| nombre | String UK | 'Licitacion publica', 'Suministro directo', 'Proyecto a medida', 'Contrato marco' |
| descripcion | String | nullable |

---

### CRM_CONFIGURACION_SISTEMA
Variables del sistema (alertas, metas, etc.)
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_configuracion | Long PK | |
| clave | String UK | ej: 'dias_alerta_lead_sin_contactar', 'monto_minimo_cliente_nuevo' |
| valor | String | |
| descripcion | String | nullable |
| fecha_actualizacion | LocalDateTime | |

---

### CRM_AUDITORIA
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_auditoria | Long PK | |
| nombre_tabla | String | |
| id_registro | Long | |
| valor_antiguo | String | nullable |
| valor_nuevo | String | nullable |
| tipo_operacion | String | 'INSERT', 'UPDATE', 'DELETE' |
| fecha_registro | LocalDateTime | |
| id_usuario | Long FK | |

---

## Relaciones

```
CRM_PAIS ||--o{ CRM_DEPARTAMENTO : "contiene"
CRM_DEPARTAMENTO ||--o{ CRM_MUNICIPIO : "contiene"
CRM_DEPARTAMENTO ||--o{ CRM_USUARIO : "area asignada"
CRM_MUNICIPIO ||--o{ CRM_EMPRESA : "ubicada en"
CRM_DOCUMENTO ||--o{ CRM_EMPRESA : "tipo documento"
CRM_MODALIDAD ||--o{ CRM_EMPRESA : "modalidad"
CRM_EMPRESA ||--o{ CRM_CONTACTO : "tiene"
CRM_CONTACTO ||--o{ CRM_EMAIL : "tiene"
CRM_CONTACTO ||--o{ CRM_TELEFONO : "tiene"

CRM_ORIGEN_LEAD ||--o{ CRM_LEAD : "origen"
CRM_ESTADO_LEAD ||--o{ CRM_LEAD : "estado actual"
CRM_EMPRESA ||--o{ CRM_LEAD : "relacionado"
CRM_CONTACTO ||--o{ CRM_LEAD : "contacto asociado"
CRM_USUARIO ||--o{ CRM_LEAD : "asignado a"
CRM_LEAD ||--o{ CRM_LEAD_INTERES : "tiene intereses"
CRM_INTERES ||--o{ CRM_LEAD_INTERES : "aplica a"
CRM_LEAD ||--o{ CRM_COMENTARIO_LEAD : "historico seguimiento"
CRM_USUARIO ||--o{ CRM_COMENTARIO_LEAD : "registra"
CRM_LEAD ||--o{ CRM_HISTORIAL_ESTADO_LEAD : "cambia estado"
CRM_ESTADO_LEAD ||--o{ CRM_HISTORIAL_ESTADO_LEAD : "estado anterior"
CRM_ESTADO_LEAD ||--o{ CRM_HISTORIAL_ESTADO_LEAD : "estado nuevo"
CRM_USUARIO ||--o{ CRM_HISTORIAL_ESTADO_LEAD : "ejecuta cambio"

CRM_LEAD ||--o| CRM_OPORTUNIDAD : "se convierte en"
CRM_LEAD ||--o{ CRM_OPORTUNIDAD : "lead origen"
CRM_EMPRESA ||--o{ CRM_OPORTUNIDAD : "genera"
CRM_SECTOR ||--o{ CRM_OPORTUNIDAD : "sector"
CRM_TIPO_OPORTUNIDAD ||--o{ CRM_OPORTUNIDAD : "tipo"
CRM_ESTADO_OPORTUNIDAD ||--o{ CRM_OPORTUNIDAD : "estado actual"
CRM_USUARIO ||--o{ CRM_OPORTUNIDAD : "asignada a"
CRM_MOTIVO_CIERRE |o--o{ CRM_OPORTUNIDAD : "motivo cierre"
CRM_OPORTUNIDAD ||--o{ CRM_OPORTUNIDAD_PRODUCTO : "productos"
CRM_PRODUCTO ||--o{ CRM_OPORTUNIDAD_PRODUCTO : "asociado a"
CRM_OPORTUNIDAD ||--o{ CRM_HISTORIAL_ESTADO : "cambia estado"
CRM_ESTADO_OPORTUNIDAD ||--o{ CRM_HISTORIAL_ESTADO : "estado anterior"
CRM_ESTADO_OPORTUNIDAD ||--o{ CRM_HISTORIAL_ESTADO : "estado nuevo"
CRM_USUARIO ||--o{ CRM_HISTORIAL_ESTADO : "ejecuta cambio"

CRM_LEAD ||--o{ CRM_ACTIVIDAD : "actividades"
CRM_OPORTUNIDAD ||--o{ CRM_ACTIVIDAD : "actividades"
CRM_USUARIO ||--o{ CRM_ACTIVIDAD : "realiza"
CRM_ACTIVIDAD ||--o| CRM_UBICACION : "ubicada en"

CRM_OPORTUNIDAD ||--o| CRM_PROYECTO : "genera"
CRM_USUARIO ||--o{ CRM_PROYECTO : "responsable"

CRM_USUARIO ||--o{ CRM_AUDITORIA : "registra cambios"
```

---

## Notas de Implementacion

### Campos denormalizados para facilidad de consultas
- `lead.ciudad` - Se almacena directamente para evitar joins en queries frecuentes
- `empresa.sector` - Almacenado en empresa aunque existe CRM_SECTOR para oportunidad
- `lead.tipo_cliente` - 'NUEVO' o 'ACTIVO' directamente en el lead

### Sistema de Score para Leads
- Campo `lead.score` (0-100) para priorizacion
- Se usa para ordenar leads en kanban y dashboards
- No requiere tabla separada, es campo directo

### Comentarios/Seguimiento de Leads
- `CRM_COMENTARIO_LEAD` captura el historico de interacciones
- Campo `tipo`: 'LLAMADA', 'EMAIL', 'VISITA', 'REUNION'
- Sirve como log temporal para alertas de actividad

### Proyectos
- Se crean automaticamente cuando una oportunidad se cierra como GANADA
- Heredan informacion de la oportunidad origen
- Campo `estado`: 'Planificacion', 'En ejecucion', 'Entregado', 'Cancelado'

### Variables del Sistema
- Tabla `CRM_CONFIGURACION_SISTEMA` para configuracion dinamica
- Ejemplos: dias para alertas, monto minimo cliente nuevo, meta de actividades