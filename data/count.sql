select
    [O_ID]
, [O_NAME]
, F_Cnt as N'菜色數'
,
    (
case FT_T_Source when '1'then   N'APP自動'
when '2' then N'APP手動'
else N'WEB'
 end
) as N'來源'
, T.T_Cnt as N'來源'
FROM [ORG_INFO] as OI
    left join
    (
  select
        [MB_BID], count([MB_NO]) as F_Cnt
    from [FT_MenuBase]
    where MB_CR_DATE>=@DateS
    group by MB_BID
)as MB on OI.O_ID=MB.MB_BID
    left join
    (
 select
        FT_BID, FT_T_Source, count(FT_No) as T_Cnt
    from FT_FoodTemperature
    where FT_T_DATE>=@DateS
    group by FT_BID,FT_T_Source

) as T on  OI.O_ID=T.FT_BID
WHERE (OI.O_GroupMeal_FLAG = 'Y') and FT_T_Source is not null
order by O_ID,FT_T_Source